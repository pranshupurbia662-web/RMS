import Order from "../models/OrderModel.js";

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addItemsToOrder = async (req, res) => {
  try {
    const { items } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    items.forEach((newItem) => {
      const existingItem = order.items.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        order.items.push({
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
        });
      }
    });

    order.totalAmount = order.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    order.status = "Received";

    await order.save();

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};