const incomeSchema = require("../models/incomeModel");

// Method for saving incomes
exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const userId = req.auth.userId;

  const income = incomeSchema({
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
    await income.save();
    res.status(200).json({ message: "Income Added" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error.message);
  }

  console.log(income);
};

// Method for retrieving incomes
exports.getIncomes = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const incomes = await incomeSchema.find({ userId }).sort({ createdAt: -1 }); //making most recent entry appear first
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Deleting entered income
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  const userId = req.auth.userId;
  incomeSchema
    .findByIdAndDelete({ _id: id, userId })
    .then((income) => {
      res.status(200).json({ message: "Income Deleted Successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
