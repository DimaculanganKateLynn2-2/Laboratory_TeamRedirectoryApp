import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(AppContext);

  return (
    <nav className="bg-gray-800 px-8 py-4 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h2 className="text-xl font-bold">Team Directory</h2>

        <div className="flex items-center gap-5">
          <Link className="hover:text-blue-300" to="/">
            Home
          </Link>

          <Link className="hover:text-blue-300" to="/users">
            Users
          </Link>

          <Link className="hover:text-blue-300" to="/about">
            About
          </Link>

          <button
            onClick={toggleDarkMode}
            className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

