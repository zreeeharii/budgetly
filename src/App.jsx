import { useState } from "react";

import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import Summary from "./components/Summary";
import AddTransaction from "./components/AddTransaction";
import SearchBar from "./components/SearchBar";
import TransactionList from "./components/TransactionList";

import useLocalStorage from "./hooks/useLocalStorage";

import "./styles/App.css";

function App() {
  const [transactions, setTransactions] = useLocalStorage(
    "transactions",
    []
  );

  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [transaction, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const filteredTransactions = transactions.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="dashboard">

        <section className="top-section">

          <BalanceCard transactions={transactions} />

          <Summary transactions={transactions} />

        </section>

        <section className="content-grid">

          <div className="left-panel">

            <AddTransaction
              addTransaction={addTransaction}
            />

          </div>

          <div className="right-panel">

            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            <TransactionList
              transactions={filteredTransactions}
              deleteTransaction={deleteTransaction}
            />

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;