import path from "path";
import express from "express";
import Invoice from "../models/InvoiceModel.js";
import PDFDocument from "pdfkit";

const router = express.Router();

// CREATE INVOICE
router.post("/", async (req, res) => {
  try {
    const invoiceCount = await Invoice.countDocuments();
    const invoiceNo = `INV-${1001 + invoiceCount}`;
    const invoice = await Invoice.create({ invoiceNo, ...req.body });
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL INVOICES
router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DOWNLOAD PDF
router.get("/:id/download", async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    const doc = new PDFDocument({ size: "A4", margin: 0 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${invoice.invoiceNo}.pdf`
    );

    doc.pipe(res);

    const gold  = "#D39A23";
    const dark  = "#7a5c10";
    const black = "#1a1a1a";
    const gray  = "#666666";
    const light = "#FFF8E7";
    const white = "#ffffff";
    const pageW = 595;
    const pageH = 842;

    // ================================================
    // TOP GOLD HEADER BAND
    // ================================================
    doc.rect(0, 0, pageW, 120).fill(gold);

    const logoPath = path.join(process.cwd(), "assets", "logo.png");
    try {
      doc.image(logoPath, 25, 10, { width: 95 });
    } catch (e) {
      console.log("Logo not found");
    }

    doc
      .fontSize(20)
      .fillColor(white)
      .font("Helvetica-Bold")
      .text("ROYAL SPICE RESTAURANT", 135, 20, { lineBreak: false });

    doc
      .fontSize(9.5)
      .fillColor(white)
      .font("Helvetica")
      .text("Premium Dining Experience  |  Udaipur, Rajasthan", 135, 48);

    doc
      .fontSize(9)
      .fillColor(white)
      .text("+91 9876543210  |  www.royalspice.com", 135, 63);

    doc
      .fontSize(13)
      .fillColor(white)
      .font("Helvetica-Bold")
      .text("TAX INVOICE", 400, 18, { width: 175, align: "center" });

    doc
      .fontSize(9.5)
      .fillColor(white)
      .font("Helvetica");

    const detailX = 408;

    doc.text(`Invoice No  :`, detailX, 45, { continued: true })
       .font("Helvetica-Bold")
       .text(` ${invoice.invoiceNo}`);

    doc.font("Helvetica")
       .text(`Table No    :`, detailX, 62, { continued: true })
       .font("Helvetica-Bold")
       .text(` ${invoice.tableNumber}`);

    doc.font("Helvetica")
       .text(`Payment     :`, detailX, 79, { continued: true })
       .font("Helvetica-Bold")
       .text(` ${invoice.paymentMode}`);

    doc.font("Helvetica")
       .text(`Date        :`, detailX, 96, { continued: true })
       .font("Helvetica-Bold")
       .text(` ${new Date(invoice.createdAt).toLocaleDateString("en-IN")}`);

    // ================================================
    // LIGHT BAND
    // ================================================
    doc.rect(0, 120, pageW, 35).fill(light);

    doc
      .fontSize(8.5)
      .fillColor(dark)
      .font("Helvetica")
      .text("GSTIN : 08ABCDE1234F1Z5",   35,  132)
      .text("FSSAI : 11223344556677",     220, 132)
      .text(
        `Time : ${new Date(invoice.createdAt).toLocaleTimeString("en-IN")}`,
        410, 132
      );

    // ================================================
    // TABLE HEADER
    // ================================================
    let y = 172;

    doc.rect(30, y, pageW - 60, 28).fill(gold);

    doc
      .fontSize(10)
      .fillColor(white)
      .font("Helvetica-Bold");

    doc.text("#",       42,  y + 9);
    doc.text("Item",    70,  y + 9);
    doc.text("Qty",    320,  y + 9, { width: 55,  align: "center" });
    doc.text("Rate",   390,  y + 9, { width: 70,  align: "right"  });
    doc.text("Amount", 470,  y + 9, { width: 80,  align: "right"  });

    y += 36;

    // ================================================
    // ITEMS
    // ================================================
    invoice.items.forEach((item, index) => {
      const rowBg = index % 2 === 0 ? white : light;
      doc.rect(30, y - 5, pageW - 60, 26).fill(rowBg);

      doc
        .fontSize(10)
        .fillColor(black)
        .font("Helvetica");

      doc.text(`${index + 1}`,                     42,  y);
      doc.text(item.name,                           70,  y, { width: 240 });
      doc.text(item.quantity.toString(),           320,  y, { width: 55,  align: "center" });
      doc.text(`Rs.${item.price}`,                 390,  y, { width: 70,  align: "right"  });
      doc.text(`Rs.${item.price * item.quantity}`, 470,  y, { width: 80,  align: "right"  });

      y += 26;
    });

    doc.rect(30, y - 5, pageW - 60, 1.5).fill(gold);

    y += 18;

    // ================================================
    // TOTALS BOX
    // ================================================
    const totalBoxY = y;
    doc.roundedRect(320, totalBoxY, 245, 112, 8).fill(light);

    doc
      .fontSize(10.5)
      .fillColor(black)
      .font("Helvetica");

    doc.text("Subtotal",  338, totalBoxY + 14);
    doc.text(`Rs. ${invoice.subtotal}`, 460, totalBoxY + 14, { width: 90, align: "right" });

    doc.text("GST (18%)", 338, totalBoxY + 36);
    doc.text(`Rs. ${invoice.gst}`, 460, totalBoxY + 36, { width: 90, align: "right" });

    doc.moveTo(338, totalBoxY + 58).lineTo(558, totalBoxY + 58).lineWidth(1).stroke(gold);

    doc
      .fontSize(13)
      .fillColor(gold)
      .font("Helvetica-Bold");

    doc.text("Grand Total",               338, totalBoxY + 68);
    doc.text(`Rs. ${invoice.grandTotal}`, 430, totalBoxY + 67, { width: 125, align: "right" });

    // ================================================
    // AMOUNT IN WORDS
    // ================================================
    y = totalBoxY + 128;

    doc
      .fontSize(9)
      .fillColor(gray)
      .font("Helvetica")
      .text(
        `Amount In Words : Rupees ${invoice.grandTotal} Only`,
        35, y
      );

    y += 25;

    // ================================================
    // SIGNATURE SECTION
    // ================================================

    // Customer signature — line only
    doc.moveTo(35, y + 30).lineTo(190, y + 30).lineWidth(0.5).stroke("#cccccc");
    doc
      .fontSize(8.5)
      .fillColor(gray)
      .font("Helvetica")
      .text("Customer Signature", 35, y + 36);

    // Authorized signature — sign.jpeg image
    const signPath = path.join(process.cwd(), "assets", "sign.jpeg");
    try {
      doc.image(signPath, 390, y, { width: 100, height: 40 });
    } catch (e) {
      console.log("Sign not found");
    }

    // Line under sign image
    doc.moveTo(370, y + 44).lineTo(555, y + 44).lineWidth(0.5).stroke("#cccccc");
    doc
      .fontSize(8.5)
      .fillColor(gray)
      .font("Helvetica")
      .text("Authorized Signature", 390, y + 50);

    y += 80;

    // ================================================
    // THANK YOU
    // ================================================
    doc
      .fontSize(15)
      .fillColor(gold)
      .font("Helvetica-Bold")
      .text("Thank You For Dining With Us!", 0, y, { align: "center" });

    doc
      .fontSize(9.5)
      .fillColor(gray)
      .font("Helvetica")
      .text("We hope to see you again soon  •  Royal Spice Restaurant", 0, y + 22, { align: "center" });

    // ================================================
    // FOOTER BAND
    // ================================================
    doc.rect(0, pageH - 38, pageW, 38).fill(gold);

    doc
      .fontSize(9)
      .fillColor(white)
      .font("Helvetica")
      .text("Royal Spice Restaurant | Udaipur, Rajasthan", 30,  pageH - 24)
      .text("+91 9876543210",                              310, pageH - 24)
      .text("www.royalspice.com",                          435, pageH - 24);

    doc.end();

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;