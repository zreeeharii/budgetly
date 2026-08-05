import TransactionItem from "./TransactionItem";

const TransactionList = ({
  transactions,
  deleteTransaction,
}) => {
  return (
    <section className="transaction-list">

      <div className="list-header">
        <h2>Recent Transactions</h2>

        <span>
          {transactions.length} Transaction
          {transactions.length !== 1 ? "s" : ""}
        </span>
      </div>

      {transactions.length === 0 ? (
        <div className="empty-state">

          <h3>No transactions yet.</h3>

          <p>
            Start by adding your first income or expense.
          </p>

        </div>
      ) : (
        transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))
      )}

    </section>
  );
};

export default TransactionList;