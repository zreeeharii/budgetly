import { FaTrash } from "react-icons/fa";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  return (
    <div className={`transaction-item ${transaction.type}`}>

      <div className="transaction-left">
        <h4>{transaction.title}</h4>

        <p>
          {transaction.category}
        </p>
      </div>

      <div className="transaction-right">

        <h3>
          {transaction.type === "income" ? "+" : "-"}₹
          {transaction.amount.toLocaleString("en-IN")}
        </h3>

        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
};

export default TransactionItem;