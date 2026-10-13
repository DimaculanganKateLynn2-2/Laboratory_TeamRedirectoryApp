import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function UserCard({ user }) {
  const { favorites, toggleFavorite, darkMode } =
    useContext(AppContext);

  const isFavorite = favorites.includes(user.id);

  return (
    <div
      className={
        darkMode
          ? "rounded-xl bg-gray-800 p-6 shadow-lg"
          : "rounded-xl bg-white p-6 shadow-lg"
      }
    >
      <h2 className="mb-2 text-2xl font-bold">{user.name}</h2>

      <p className="mb-1 text-gray-500">{user.role}</p>

      <p className="mb-5 text-gray-500">{user.location}</p>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => toggleFavorite(user.id)}
          className={
            isFavorite
              ? "rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
              : "rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
          }
        >
          {isFavorite ? "★ Favorite" : "☆ Add Favorite"}
        </button>

        <Link to={`/users/${user.id}`}>
          <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;