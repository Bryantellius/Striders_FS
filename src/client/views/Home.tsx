import React, { useState, useEffect } from "react";
import type { IActivity } from "../utils/types";
import ActivityCard from "../components/ActivityCard";

const Home: React.FC<HomeProps> = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  const getActivities = async () => {
    let res = await fetch(`/api/activities`);
    let activities = await res.json();
    setActivities(activities);
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <main className="container-fluid">
      <section className="row my-2 justify-content-center">
        <div className="col-md-6">
          <ul className="list-group-flush">
            {activities.map((item) => (
              <ActivityCard
                key={`${item.id}-${item.type}-${item.date}`}
                entry={item}
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export interface HomeProps {}

export default Home;
