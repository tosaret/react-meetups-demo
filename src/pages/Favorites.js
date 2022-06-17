import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/Meetups/MeetupList";

const Favorites = () => {
  const ctx = useContext(FavoritesContext);

  let content;

  if (ctx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList list={ctx.favorites} />;
  }

  return (
    <>
      <h1>Favorite Meetups</h1>
      {content}
    </>
  );
};

export default Favorites;
