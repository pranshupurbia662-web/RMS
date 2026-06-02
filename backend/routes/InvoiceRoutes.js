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

    const doc = new PDFDocument({ margin: 40, size: "A4" });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${invoice.invoiceNo}.pdf`
    );

    doc.pipe(res);

    // LOGO
    const logoPath = path.join(process.cwd(), "assets", "logo.png");
    try {
      doc.image(logoPath, 40, 20, { width: 90 });
    } catch (error) {
      console.log("Logo not found");
    }

    // HEADER
    doc
      .fontSize(18)
      .fillColor("#D39A23")
      .text("ROYAL SPICE RESTAURANT", 145, 55, { width: 230, lineBreak: false });

   

    // INVOICE BOX
    doc.roundedRect(420, 30, 140, 45, 6).stroke("#D39A23");
    doc
      .fontSize(14)
      .fillColor("#D39A23")
      .text("INVOICE", 420, 45, { width: 140, align: "center" });

    // INFO BOX
    doc.roundedRect(40, 140, 520, 110, 8).lineWidth(1).stroke("#D39A23");

    doc.fontSize(13).fillColor("#000");
    doc.text(`Invoice No : ${invoice.invoiceNo}`, 60, 175);
    doc.text(`Table Number : ${invoice.tableNumber}`, 60, 210);
    doc.text(`Payment Mode : ${invoice.paymentMode}`, 320, 175);
    doc.text(
      `Date : ${new Date(invoice.createdAt).toLocaleString()}`,
      320,
      210
    );

    // TABLE HEADER
    let y = 290;
    doc.rect(40, y, 520, 35).fill("#D39A23");
    doc.fillColor("white");
    doc.text("Item", 55, y + 10);
    doc.text("Qty", 300, y + 10);
    doc.text("Price", 380, y + 10);
    doc.text("Total", 470, y + 10);

    // ITEMS
    y += 50;
    invoice.items.forEach((item) => {
      doc.fillColor("black");
      doc.text(item.name, 55, y);
      doc.text(item.quantity.toString(), 300, y);
      doc.text(`Rs. ${item.price}`, 380, y);
      doc.text(`Rs. ${item.price * item.quantity}`, 470, y);
      y += 30;
    });

    // TOTAL BOX
    y += 25;
    doc.roundedRect(320, y, 220, 120, 10).fill("#FFF4D6");

    doc.fillColor("#000").fontSize(13);
    doc.text(`Subtotal : Rs. ${invoice.subtotal}`, 340, y + 20);
    doc.text(`GST : Rs. ${invoice.gst}`, 340, y + 50);

    doc.fontSize(18).fillColor("#D39A23");
    doc.text(`Grand Total : Rs. ${invoice.grandTotal}`, 340, y + 85);

    // FOOTER
    doc
      .fontSize(16)
      .fillColor("#D39A23")
      .text("Thank You For Dining With Us", 0, y + 170, { align: "center" });

    doc
      .fontSize(10)
      .fillColor("#666")
      .text("Royal Spice Restaurant | Udaipur", { align: "center" });

    doc.text("Visit Again", { align: "center" });

    doc.end();

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;