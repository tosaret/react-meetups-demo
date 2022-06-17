import { useState, useEffect } from "react";

import MeetupItem from "../components/Meetups/MeetupItem";
import MeetupList from "../components/Meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetups = () => {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://react-refresher-udemy-88dce-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetupsArray = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetupsArray.push(meetup);
        }

        setMeetups(meetupsArray);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList list={meetups} />
    </div>
  );
};

export default AllMeetups;
