import * as React from "react";
import { apiService } from "../utils/apiService";
import { IActivity } from "../utils/types";
import { useHistory } from "react-router";
import moment from "moment";
import ActivityCard from "../components/ActivityCard";

const ViewUser: React.FC<ViewUserProps> = () => {
  const history = useHistory();

  const [activities, setActivities] = React.useState<IActivity[]>([]);

  React.useEffect(() => {
    (async () => {
      let activities = await apiService(`/api/activities/user/5`);
      setActivities(activities);
    })();
  }, []);

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-6">
          <div className="avatar p-3 bg-success text-light rounded">B</div>
          <h1 className="text-center">Ben Bryant</h1>
        </div>
        <div className="col-md-6">
          <div className="row row-cols-2 row-cols-md-2">
            <div className="card d-flex flex-column justify-content-center align-items-center p-2 shadow-sm">
              <small>Total</small>
              <span>25</span>
            </div>
            <div className="card d-flex flex-column justify-content-center align-items-center p-2 shadow-sm">
              <small>Runs</small>
              <span>15</span>
            </div>
            <div className="card d-flex flex-column justify-content-center align-items-center p-2 shadow-sm">
              <small>Bikes</small>
              <span>3</span>
            </div>
            <div className="card d-flex flex-column justify-content-center align-items-center p-2 shadow-sm">
              <small>Swims</small>
              <span>2</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        {activities.map((activity) => {
          return (
            <ActivityCard
              entry={activity}
              key={`${activity.id}-${activity.type}-${activity.date}`}
            />
          );
        })}
      </section>
    </main>
  );
};

export interface ViewUserProps {}

export default ViewUser;
