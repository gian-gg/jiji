const express = require("express");

const {
  createExpense,
  getExpenses,
  getExpense,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenseControllers");

const router = express.Router();

// get all expenses
router.get("/", getExpenses);

// get a single expense
router.get("/:id", getExpense);

// delete an expense
router.delete("/:id", deleteExpense);

// post a new expense
router.post("/", createExpense);

// update an expense
router.patch("/:id", updateExpense);

module.exports = router;
