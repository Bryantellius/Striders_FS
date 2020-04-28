import * as React from "react";
import { apiService } from "../utils/apiService";
import { IActivity } from "../utils/types";
import { useHistory } from "react-router";
import moment from "moment";

const ViewUser: React.FC<ViewUserProps> = () => {
  const history = useHistory();

  const [userActi, setUserActi] = React.useState<IActivity[]>([]);

  React.useEffect(() => {
    (async () => {
      let userActi = await apiService(`/api/activities/byUser/1`);
      setUserActi(userActi);
    })();
  }, []);

  return (
    <main className="container">
      <button className="btn btn-secondary" onClick={() => history.push("/")}>
        Back
      </button>
      <section className="row my-2 justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Ben Bryant</h1>
        </div>
        <div className="col-md-6">
          {userActi.map((activity) => {
            return (
              <div
                className="card"
                key={`${activity?.lastname}-${activity?.id}`}
              >
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
            );
          })}
        </div>
      </section>
    </main>
  );
};

export interface ViewUserProps {}

export default ViewUser;
