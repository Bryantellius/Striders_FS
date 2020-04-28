import * as React from "react";
import type { IActivity } from "../utils/types";
import { apiService } from "../utils/apiService";
import { NavLink, useParams } from "react-router-dom";
import moment from "moment";

const SingleEntry: React.FC<SingleEntryProps> = () => {
  const { activityId } = useParams();

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
      <section className="d-flex justify-content-between align-items-start">
        <NavLink to={`/`} className="btn btn-dark">
          Back
        </NavLink>
        <NavLink to={`/edit/${activityId}`} className="btn btn-secondary">
          Edit
        </NavLink>
      </section>
      <section className="row my-2 justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body d-flex justify-content-around">
              <span>{activity?.type}</span>
              <span>{activity?.distance} mi</span>
              <span>{activity?.duration} min</span>
            </div>
            <div className="card-footer d-flex justify-content-end align-items-center">
              <span className="badge badge-info">
                {moment(activity?.date).format("MMM Do")}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export interface SingleEntryProps {}

export default SingleEntry;
