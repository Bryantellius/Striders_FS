import * as React from "react";
import type { IActivity } from "../utils/types";
import { apiService, User } from "../utils/apiService";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";

const SingleEntry: React.FC<SingleEntryProps> = () => {
  const { activityId } = useParams();
  const history = useHistory();

  const [activity, setActivity] = React.useState<IActivity>(null);

  const getActivity = async () => {
    let activity = await apiService(`/api/activities/${activityId}`);
    setActivity(activity);
  };

  React.useEffect(() => {
    getActivity();
  }, []);

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-3">
          <button
            className="btn btn-success text-light"
            onClick={() => history.push("/")}
          >
            Back
          </button>
          <button
            className="btn btn-info text-light"
            onClick={() => history.push(`/edit/${activity.id}`)}
          >
            Edit
          </button>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-header">
              {activity?.firstname} {activity?.lastname} -- {activity?.type}
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
                <div className="col-md-6 card-deck">
                  <div className="card d-flex flex-column justify-content-center align-items-center p-3">
                    <span>{activity?.distance}</span>
                    <small className="text-muted">Distance</small>
                  </div>
                  <div className="card d-flex flex-column justify-content-center align-items-center p-3">
                    <span>{activity?.duration}</span>
                    <small className="text-muted">Duration</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export interface SingleEntryProps {}

export default SingleEntry;
