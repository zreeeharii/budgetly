import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const Summary = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <section className="summary">

      <div className="summary-card income-card">

        <div className="summary-icon">
          <FaArrowTrendUp />
        </div>

        <div>
          <p>Total Income</p>
          <h3>₹{income.toLocaleString("en-IN")}</h3>
        </div>

      </div>

      <div className="summary-card expense-card">

        <div className="summary-icon">
          <FaArrowTrendDown />
        </div>

        <div>
          <p>Total Expense</p>
          <h3>₹{expense.toLocaleString("en-IN")}</h3>
        </div>

      </div>

    </section>
  );
};

export default Summary;