import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

import Card from "../layout/Card";
import styles from "./MeetupItem.module.css";

const MeetupItem = ({ item }) => {
  const ctx = useContext(FavoritesContext);

  const itemIsFavorite = ctx.itemIsFavorite(item.id);

  const toggleFavoriteHandler = () => {
    if (itemIsFavorite) {
      ctx.removeFavorite(item.id);
    } else {
      ctx.addFavorite(item);
    }
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={item.image} alt="" />
        </div>
        <div className={styles.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
