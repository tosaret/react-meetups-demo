import { useRef } from "react";

import Card from "../layout/Card";
import styles from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRed = useRef();
  const descInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const meetupData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRed.current.value,
      description: descInputRef.current.value,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRed} />
        </div>
        <div className={styles.control}>
          <label htmlFor="desc">Description</label>
          <textarea type="text" required id="desc" ref={descInputRef} />
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
