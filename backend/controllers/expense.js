const expenseSchema = require("../models/expenseModel");

// Method for saving expenses
exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const userId = req.auth.userId;

  const expense = expenseSchema({
    userId,
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Invalid : Amount has to be a positive number" });
    }
    await expense.save();
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error.message);
  }

  console.log(expense);
};

// Method for retrieving expenses
exports.getExpense = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const expenses = await expenseSchema.find({userId}).sort({ createdAt: -1 }); //making most recent entry appear first
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Deleting entered expenses
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  const userId = req.auth.userId;

  expenseSchema
    .findByIdAndDelete({ _id: id, userId })
    .then((expense) => {
      res.status(200).json({ message: "Expense Deleted Successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
