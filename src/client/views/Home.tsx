import React, { useState, useEffect } from "react";
import type { IActivity } from "../utils/types";
import { apiService } from "../utils/apiService";
import ActivityCard from "../components/ActivityCard";
import UserCard from "../components/UserCard";

const Home: React.FC<HomeProps> = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    (async () => {
      let activities = await apiService(`/api/activities`);
      setActivities(activities);
    })();
  }, []);

  return (
    <main className="container-fluid">
      <section className="row my-2 justify-content-center">
        <div className="col-md-3">
          <UserCard />
        </div>
        <div className="col-md-6">
          <ul className="list-group-flush border-left border-right border-success">
            {activities.map((item) => (
              <ActivityCard
                key={`${item.id}-${item.type}-${item.date}`}
                entry={item}
              />
            ))}
          </ul>
        </div>
        <div className="col-md-3">Suggested Friends Col</div>
      </section>
    </main>
  );
};

export interface HomeProps {}

export default Home;
