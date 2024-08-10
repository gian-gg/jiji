const Expense = require("../models/ExpenseModel");
const mongoose = require("mongoose");

// get all expenses
const getExpenses = async (req, res) => {
  const expenses = await Expense.find({}).sort({ createdAt: -1 }); // descending order

  res.status(200).json({ expenses });
};

// get single expense
const getExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Document does not exist." });
  }

  const expense = await Expense.findById(id);

  if (!expense) {
    return res.status(400).json({ error: "Document cannot be found." });
  }

  res.status(200).json({ expense });
};

// create a new expense
const createExpense = async (req, res) => {
  const { title, amount, type, date } = req.body;
  //   add doc to db
  try {
    const expense = await Expense.create({ title, amount, type, date });
    res.status(200).json({
      message: "Document created successfully",
      document: { expense },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete expense
const deleteExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Document does not exist." });
  }

  const expense = await Expense.findByIdAndDelete(id);

  if (!expense) {
    return res.status(400).json({ error: "Document cannot be found." });
  }

  res.status(200).json({
    message: "Document deleted successfully",
    document: { expense },
  });
};

// update expense
const updateExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Document does not exist." });
  }

  const expense = await Expense.findByIdAndUpdate(id, {
    ...req.body,
  });

  if (!expense) {
    return res.status(400).json({ error: "Document cannot be found." });
  }

  res.status(200).json({
    message: "Document updated successfully",
    updatedDocument: { ...req.body },
    previousDocument: { expense },
  });
};

module.exports = {
  createExpense,
  getExpenses,
  getExpense,
  deleteExpense,
  updateExpense,
};
