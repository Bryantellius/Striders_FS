import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import type { IActivity } from "../utils/types";
import { apiService, User } from "../utils/apiService";
import ActivityCard from "../components/ActivityCard";
import UserCard from "../components/UserCard";

const Home: React.FC<HomeProps> = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const history = useHistory();

  useEffect(() => {
    if (!User || User.userid === null || User.role !== "guest") {
      console.log(`Didn't recognize user`);
      history.push("/sign_up");
    } else {
      (async () => {
        let activities = await apiService(`/api/activities`);
        setActivities(activities);
      })();
    }
  }, []);

  return (
    <main className="container-fluid">
      <section className="row my-2 justify-content-center">
        <div className="col-md-3">
          <UserCard entries={activities}/>
        </div>
        <div id="homeActivities" className="col-md-6">
          <div>
            {activities.map((item) => (
              <ActivityCard
                key={`${item.id}-${item.type}-${item.date}`}
                entry={item}
              />
            ))}
          </div>
        </div>
        <div className="col-md-3">Suggested Friends Col</div>
      </section>
    </main>
  );
};

export interface HomeProps {}

export default Home;
