import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { apiService, User } from "../utils/apiService";

const Edit: React.FC<EditProps> = () => {
  const { activityId } = useParams();

  const history = useHistory();

  const [type, setType] = React.useState<string>("");
  const [distance, setDistance] = React.useState<string>("");
  const [duration, setDuration] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [desciption, setDesciption] = React.useState<string>("");

  React.useEffect(() => {
    if (!User || User.userid === null || User.role !== "guest") {
      console.log(`Didn't recognize user`);
      history.push("/sign_up");
    } else {
      (async () => {
        const res = await apiService(`/api/activities/${activityId}`);
        setType(res.type);
        setDistance(res.distance.toString());
        setDuration(res.duration);
      })();
    }
  }, []);

  const updateAct = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let activity = { type, distance, duration, title, desciption };
    await apiService(`/api/activities/${activityId}`, "PUT", activity);
    history.push(`/activity/${activityId}`);
  };

  const deleteAct = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await apiService(`/api/activities/${activityId}`, "DELETE");
    history.push(`/`);
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
              <option value="Bike">Bike</option>
              <option value="Swim">Swim</option>
            </select>
            <label htmlFor="distance">Distance</label>
            <input
              id="distance"
              className="form-control"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              className="form-control"
              placeholder="00:00:00"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <label htmlFor="duration">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Morning Run, e.g."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="duration">Description</label>
            <textarea
              className="form-control"
              placeholder="Description of activity"
              value={desciption}
              onChange={(e) => setDesciption(e.target.value)}
            />

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
