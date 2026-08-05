import { FaWallet } from "react-icons/fa";

const BalanceCard = ({ transactions }) => {
  const balance = transactions.reduce((total, transaction) => {
    return transaction.type === "income"
      ? total + transaction.amount
      : total - transaction.amount;
  }, 0);

  return (
    <section className="balance-card">
      <div className="balance-icon">
        <FaWallet />
      </div>

      <div className="balance-content">
        <p>Current Balance</p>

        <h2>
          ₹
          {balance.toLocaleString("en-IN")}
        </h2>

        <span>Track every rupee. Spend smarter.</span>
      </div>
    </section>
  );
};

export default BalanceCard;