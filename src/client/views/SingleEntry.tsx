import * as React from "react";
import type { IActivity } from "../utils/types";
import { averagePace } from "../utils/Functions";
import { apiService, User } from "../utils/apiService";
import { useParams, NavLink } from "react-router-dom";
import moment from "moment";
import MoreActivities from "../components/MoreActivities";

const SingleEntry: React.FC<SingleEntryProps> = () => {
  const { activityId } = useParams();

  const [activity, setActivity] = React.useState<IActivity>(null);

  const getActivity = async () => {
    let activity = await apiService(`/api/activities/${activityId}`);
    setActivity(activity);
  };

  const allowEdit = (userid: number) => {
    if (User.userid == userid) {
      return (
        <NavLink to={`/edit/${activity?.id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-help-circle text-success"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </NavLink>
      );
    }
  };

  React.useEffect(() => {
    getActivity();
  }, []);

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <span>
                {activity?.firstname} {activity?.lastname} -- {activity?.type}
              </span>
              {allowEdit(activity?.userid)}
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="avatar p-3 bg-success text-light rounded">
                    {activity?.firstname[0]}
                  </div>
                  <div className="d-flex flex-column mx-2 p-2">
                    <small className="text-muted">
                      {moment(activity?.date).format("MMM Do LT")}
                    </small>
                    <h3>{activity?.title}</h3>
                    <p>{activity?.desciption}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card d-flex flex-column justify-content-center align-items-center p-3">
                    <span>{activity?.distance}mi</span>
                    <small className="text-muted">Distance</small>
                  </div>
                  <div className="card d-flex flex-column justify-content-center align-items-center p-3">
                    <small className="text-muted">Duration</small>
                    <span>{`${activity?.hrs}hr ${activity?.min}min ${activity?.sec}sec`}</span>
                  </div>
                  <div className="card d-flex flex-column justify-content-center align-items-center p-3">
                    <small className="text-muted">Pace</small>
                    <span>
                      {averagePace(
                        activity?.hrs,
                        activity?.min,
                        activity?.sec,
                        activity?.distance
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row justify-content-center my-3">
        <div className="col-md-9">
          <h3 className="border-bottom border-info p-2">
            Here's more by {activity?.firstname} {activity?.lastname}
          </h3>
          <MoreActivities userid={activity?.userid} />
        </div>
      </div> */}
    </main>
  );
};

export interface SingleEntryProps {}

export default SingleEntry;
