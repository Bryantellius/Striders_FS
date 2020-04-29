import * as React from "react";
import { useHistory } from "react-router-dom";
import { apiService, User } from "../utils/apiService";

const Add: React.FC<AddProps> = () => {
  const history = useHistory();

  const [type, setType] = React.useState<string>("Run");
  const [distance, setDistance] = React.useState<string>("");
  const [duration, setDuration] = React.useState<string>("");

  const addAct = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const activity = { type, distance, duration, userid: User.userid };
    const result = await apiService(`/api/activities`, "POST", activity);
    history.push(`/activity/${result.activityId}`);
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
              onClick={addAct}
            >
              Add Activity
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export interface AddProps {}

export default Add;
