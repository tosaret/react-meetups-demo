import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prev) => prev.concat(favoriteMeetup));
    localStorage.setItem("favorites", JSON.stringify(userFavorites));
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prev) => prev.filter((item) => item.id !== meetupId));
    localStorage.setItem("favorites", JSON.stringify(userFavorites));
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((item) => item.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
