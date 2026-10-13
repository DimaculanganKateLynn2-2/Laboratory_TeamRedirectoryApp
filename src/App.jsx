import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const { darkMode } = useContext(AppContext);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-gray-100 text-gray-900"
      }
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;