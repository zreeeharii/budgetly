import { FaWallet } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">

      <div className="logo">

        <div className="logo-circle">
          <FaWallet />
        </div>

        <div>
          <h1>Budget Tracker</h1>
          <p>Manage your finances effortlessly</p>
        </div>

      </div>

      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

    </header>
  );
};

export default Header;