import MeetupItem from "./MeetupItem";

import styles from "./MeetupList.module.css";

const MeetupList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <MeetupItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default MeetupList;
