import * as React from "react";
import { apiService, User } from "../utils/apiService";
import { IActivity } from "../utils/types";
import { useHistory } from "react-router";
import moment from "moment";
import ActivityCard from "../components/ActivityCard";

const ViewUser: React.FC<ViewUserProps> = () => {
  const history = useHistory();

  const [user, setUser] = React.useState<any>([]);
  const [activities, setActivities] = React.useState<IActivity[]>([]);
  const [runs, setRuns] = React.useState<IActivity[]>([]);
  const [walks, setWalks] = React.useState<IActivity[]>([]);
  const [bikes, setBikes] = React.useState<IActivity[]>([]);
  const [swims, setSwims] = React.useState<IActivity[]>([]);

  React.useEffect(() => {
    (async () => {
      let activities = await apiService(`/api/activities/user/${User.userid}`);
      setActivities(activities);

      let user = await apiService(
        `/api/activities/user_details/${User.userid}`
      );
      setUser(user);

      let runs = activities.filter(
        (activity: IActivity) => activity.type === "Run"
      );
      let walks = activities.filter(
        (activity: IActivity) => activity.type === "Walk"
      );
      let bikes = activities.filter(
        (activity: IActivity) => activity.type === "Bike"
      );
      let swims = activities.filter(
        (activity: IActivity) => activity.type === "Swim"
      );
      setRuns(runs);
      setWalks(walks);
      setBikes(bikes);
      setSwims(swims);
    })();
  }, []);

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        {user?.map((user: any) => {
          return (
            <div className="col-md-6 d-flex flex-column justify-content-start align-items-center" key={`${user.id}-${user.firstname}`}>
              <div className="avatar bg-success text-light text-center">
                {user.firstname[0]}
              </div>
              <h1 className="text-center">
                {user.firstname} {user.lastname}
              </h1>
              <small className="text-muted text-center d-block">
                Member since {moment(user.created).format("MMM Do YYYY")}
              </small>
            </div>
          );
        })}
        <div className="col-md-6">
          <div className="row row-cols-2 row-cols-sm-2 p-3">
            <div className="card border-light d-flex flex-column justify-content-center align-items-center p-2 shadow-sm">
              <small>Total</small>
              <span>{activities?.length}</span>
            </div>
            <div className="card border-light d-flex flex-column justify-content-center align-items-center p-2 shadow-sm">
              <small>Runs</small>
              <span>{runs?.length}</span>
            </div>
            <div className="card border-light d-flex flex-column justify-content-center align-items-center p-2 shadow-sm">
              <small>Bikes</small>
              <span>{bikes?.length}</span>
            </div>
            <div className="card border-light d-flex flex-column justify-content-center align-items-center p-2 shadow-sm">
              <small>Swims</small>
              <span>{swims?.length}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="row">
        <div className="col-md-6">
          {activities.map((activity) => {
            return (
              <ActivityCard
                entry={activity}
                key={`${activity.id}-${activity.type}-${activity.date}`}
              />
            );
          })}
        </div>
        <div className="col-md-6">
          <h5>Activity Breakdown</h5>
          <div className="progress my-4">
            <div
              className="progress-bar bg-success w-25"
              role="progressbar"
            ></div>
            <div
              className="progress-bar bg-warning w-25"
              role="progressbar"
            ></div>
            <div className="progress-bar bg-dark w-25" role="progressbar"></div>
            <div className="progress-bar w-25" role="progressbar"></div>
          </div>
          <div className="row my-4">
            <div className="col-sm-3">
              <div className="d-inline rounded shadow-sm mx-2 p-2 bg-success text-light">
                Run
              </div>
            </div>
            <div className="col-sm-3">
              <div className="d-inline rounded shadow-sm mx-2 p-2 bg-warning text-light">
                Walk
              </div>
            </div>
            <div className="col-sm-3">
              <div className="d-inline rounded shadow-sm mx-2 p-2 bg-dark text-light">
                Bike
              </div>
            </div>
            <div className="col-sm-3">
              <div className="d-inline rounded shadow-sm mx-2 p-2 bg-primary text-light">
                Swim
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export interface ViewUserProps {}

export default ViewUser;
