import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import type { IActivity } from "../utils/types";

const Edit: React.FC<EditProps> = () => {
  const { activityId } = useParams();

  const history = useHistory();

  const [type, setType] = React.useState<string>("");
  const [distance, setDistance] = React.useState<string>("");
  const [duration, setDuration] = React.useState<string>("");

  const getActivity = async () => {
    const res = await fetch(`/api/activities/${activityId}`);
    const activity: IActivity = await res.json();
    setType(activity.type);
    setDistance(activity.distance.toString());
    setDuration(activity.duration);
  };

  React.useEffect(() => {
    getActivity();
  }, []);

  const updateAct = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({ type, distance, duration });
    let activity = { type, distance, duration };
    let res = await fetch(`/api/activities/${activityId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    });
    if (res.ok) {
      const result = await res.json();
      history.push(`/activity/${activityId}`);
    }
  };

  const deleteAct = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let res = await fetch(`/api/activities/${activityId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      history.push(`/`);
    }
  };

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-8">
          <form className="form-group p-3 border shadow">
            <label htmlFor="type">Type of Exercise</label>
            <select
              id="type"
              className="form-control"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Run">Run</option>
              <option value="Walk">Walk</option>
            </select>
            <label htmlFor="distance">Distance</label>
            <input
              id="distance"
              className="form-control"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            ></input>
            <label htmlFor="duration">Duration</label>
            <div className="d-flex input-group">
              <input
                type="text"
                className="form-control"
                placeholder="00:00:00"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              ></input>
            </div>
            <button
              className="btn btn-success btn-block w-25 mx-auto my-3"
              onClick={updateAct}
            >
              Update
            </button>
            <button
              className="btn btn-danger btn-block w-25 mx-auto my-3"
              onClick={deleteAct}
            >
              Delete
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export interface EditProps {}

export default Edit;
