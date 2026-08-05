import { useState } from "react";
import {
  FaPlus,
  FaIndianRupeeSign,
  FaTag,
} from "react-icons/fa6";

const categories = [
  "Food",
  "Travel",
  "Shopping",
  "Bills",
  "Salary",
  "Entertainment",
  "Health",
  "Education",
  "Other",
];

const AddTransaction = ({ addTransaction }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !amount || Number(amount) <= 0) {
      alert("Please enter a valid title and amount.");
      return;
    }

    addTransaction({
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      type,
      category,
      date: new Date().toISOString(),
    });

    setTitle("");
    setAmount("");
    setCategory("Food");
    setType("expense");
  };

  return (
    <section className="transaction-form-container">
      <h2>Add Transaction</h2>

      <form className="transaction-form" onSubmit={handleSubmit}>

        <div className="input-group">
          <FaTag />
          <input
            type="text"
            placeholder="Transaction title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <FaIndianRupeeSign />
          <input
            type="number"
            placeholder="Amount"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="select-grid">

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

        </div>

        <button type="submit" className="add-btn">
          <FaPlus />
          Add Transaction
        </button>

      </form>
    </section>
  );
};

export default AddTransaction;