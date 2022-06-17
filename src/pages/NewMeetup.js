import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/Meetups/NewMeetupForm";

const NewMeetup = () => {
  const history = useHistory();

  const handleAddMeetup = (data) => {
    fetch(
      "https://react-refresher-udemy-88dce-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
  );
};

export default NewMeetup;
