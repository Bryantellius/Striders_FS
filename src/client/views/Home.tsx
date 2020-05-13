import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import type { IActivity } from "../utils/types";
import { apiService, User } from "../utils/apiService";
import ActivityCard from "../components/ActivityCard";
import SuggestedUsers from "../components/SuggestedUsers";
import UserCard from "../components/UserCard";

const Home: React.FC<HomeProps> = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const history = useHistory();

  const showTimeline = () => {
    if (activities.length === 0) {
      return (
        <div className="alert alert-info">
          Follow Users to start seeing content!
        </div>
      );
    } else {
      return (
        <div>
          {activities.map((item) => (
            <ActivityCard
              key={`${item.id}-${item.type}-${item.date}`}
              entry={item}
            />
          ))}
        </div>
      );
    }
  };

  useEffect(() => {
    if (!User || User.userid === null || User.role !== "guest") {
      history.push("/sign_up");
    } else {
      (async () => {
        let activities = await apiService(
          `/api/activities/userFollows/${User.userid}`
        );
        setActivities(activities);
      })();
    }
  }, []);

  return (
    <main className="container-fluid">
      <section className="row my-2 justify-content-center">
        <div className="col-md-3">
          <UserCard entries={activities} />
        </div>
        <div id="homeActivities" className="col-md-6">
          {showTimeline()}
        </div>
        <div className="col-md-3">
          <SuggestedUsers />
        </div>
      </section>
    </main>
  );
};

export interface HomeProps {}

export default Home;
