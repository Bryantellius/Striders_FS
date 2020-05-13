import * as React from "react";
import { apiService, User } from "../utils/apiService";
import { setProgressBar, getSums } from "../utils/Functions";
import { IActivity } from "../utils/types";
import { useParams } from "react-router";
import moment from "moment";
import ActivityCard from "../components/ActivityCard";

const ViewUser: React.FC<ViewUserProps> = () => {
  const params: any = useParams();

  const [user, setUser] = React.useState<any>([]);
  const [activities, setActivities] = React.useState<IActivity[]>([]);
  const [runs, setRuns] = React.useState<IActivity[]>([]);
  const [walks, setWalks] = React.useState<IActivity[]>([]);
  const [bikes, setBikes] = React.useState<IActivity[]>([]);
  const [swims, setSwims] = React.useState<IActivity[]>([]);
  const [sums, setSums] = React.useState<any>({});
  const [show, setShow] = React.useState<boolean>(true);
  const [doesFollow, setdoesFollow] = React.useState<boolean>(false);

  const toggleFollow = async (userid: number) => {
    if (doesFollow) {
      let removed = await apiService(`/api/members/unfollowUser`, "DELETE", {
        userid: User.userid,
        following_userid: userid,
      });
      setdoesFollow(false);
    } else {
      let added = await apiService(`/api/members/followUser`, "POST", {
        userid: User.userid,
        following_userid: userid,
      });
      setdoesFollow(true);
    }
  };

  const buttonDetails = (userid: number) => {
    if (show) {
      if (doesFollow) {
        return (
          <button
            id="followBtn"
            className="btn btn-sm btn-outline-success my-3"
            onClick={() => toggleFollow(userid)}
          >
            Unfollow
          </button>
        );
      } else {
        return (
          <button
            id="followBtn"
            className="btn btn-sm btn-outline-success my-3"
            onClick={() => toggleFollow(userid)}
          >
            Follow
          </button>
        );
      }
    }
  };

  React.useEffect(() => {
    (async () => {
      // Determines if the user viewing the page is the same as the user who published the activity
      // And if the member is currently followed by the user
      if (User.userid == params.userId) {
        setShow(false);
      } else {
        let followers = await apiService(
          `/api/members/following/${User.userid}`
        );
        let follows = followers.some((item: any) => params.userId == item.id);

        if (follows) {
          setdoesFollow(true);
        } else {
          setdoesFollow(false);
        }
      }
      let activities = await apiService(
        `/api/activities/user/${params.userId}`
      );
      setActivities(activities);

      let user = await apiService(`/api/members/user_details/${params.userId}`);
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

      setProgressBar(activities, runs, walks, bikes, swims);
      let sums: any = getSums(activities, runs, walks, bikes, swims);
      setSums(sums);
    })();
  }, []);

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        {user?.map((user: any) => {
          return (
            <div
              className="col-md-6 d-flex flex-column justify-content-start align-items-center"
              key={`${user.id}-${user.firstname}`}
            >
              <div className="avatar bg-success text-light text-center">
                {user.firstname[0]}
              </div>
              <h1 className="text-center">
                {user.firstname} {user.lastname}
              </h1>
              <small className="text-muted text-center d-block">
                Member since {moment(user.created).format("MMM Do YYYY")}
              </small>
              {buttonDetails(user.id)}
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
          <h5>Activity Breakdown</h5>
          <div className="progress my-4">
            <div
              id="runs"
              className="progress-bar bg-success"
              role="progressbar"
            ></div>
            <div
              id="walks"
              className="progress-bar bg-warning"
              role="progressbar"
            ></div>
            <div
              id="bikes"
              className="progress-bar bg-dark"
              role="progressbar"
            ></div>
            <div id="swims" className="progress-bar" role="progressbar"></div>
          </div>
          <div className="card p-3">
            <div className="">
              <div className="d-flex justify-content-around rounded shadow-sm mx-2 p-2 bg-success text-light">
                <span>Run</span>
                <div className="badge badge-light">{sums?.rs}mi</div>
              </div>
            </div>
            <div className="">
              <div className="d-flex justify-content-around rounded shadow-sm mx-2 p-2 bg-warning text-light">
                <span>Walk</span>
                <div className="badge badge-light">{sums?.ws}mi</div>
              </div>
            </div>
            <div className="">
              <div className="d-flex justify-content-around rounded shadow-sm mx-2 p-2 bg-dark text-light">
                <span>Bike</span>
                <div className="badge badge-light">{sums?.bs}mi</div>
              </div>
            </div>
            <div className="">
              <div className="d-flex justify-content-around rounded shadow-sm mx-2 p-2 bg-primary text-light">
                <span>Swim</span>
                <div className="badge badge-light">{sums?.ss}mi</div>
              </div>
            </div>
          </div>
        </div>
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
      </section>
    </main>
  );
};

export interface ViewUserProps {}

export default ViewUser;
