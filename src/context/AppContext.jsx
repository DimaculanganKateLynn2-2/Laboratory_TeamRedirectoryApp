import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  function toggleFavorite(userId) {
    if (favorites.includes(userId)) {
      setFavorites(favorites.filter((id) => id !== userId));
    } else {
      setFavorites([...favorites, userId]);
    }
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
