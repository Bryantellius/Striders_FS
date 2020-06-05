import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { apiService, User } from "../utils/apiService";

const Edit: React.FC<EditProps> = () => {
  const { activityId } = useParams();

  const history = useHistory();

  const [type, setType] = React.useState<string>("");
  const [distance, setDistance] = React.useState<number>(0);
  const [hours, setHours] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [seconds, setSeconds] = React.useState<number>(0);
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
        setHours(res.hrs);
        setMinutes(res.min);
        setSeconds(res.sec);
        setTitle(res.title);
        setDesciption(res.desciption);
      })();
    }
  }, []);

  const updateAct = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let activity = {
      type,
      distance,
      hrs: hours,
      min: minutes,
      sec: seconds,
      title,
      desciption,
    };
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
        <div className="col-sm-6">
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
              type="number"
              className="form-control"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
            />
            <h6 className=" d-block mb-3 border-bottom border-info p-2">
              Duration
            </h6>
            <div className="input-group ">
              <input
                type="number"
                className="form-control text-center"
                placeholder="00"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
              <div className="input-group-append">
                <span className="input-group-text">:</span>
              </div>
              <input
                type="number"
                className="form-control text-center"
                placeholder="00"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
              />
              <div className="input-group-append">
                <span className="input-group-text">:</span>
              </div>
              <input
                type="number"
                className="form-control text-center"
                placeholder="00"
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
              />
            </div>
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
              className="btn btn-success btn-block w-50 mx-auto my-3"
              onClick={updateAct}
            >
              Update
            </button>
            <button
              className="btn btn-danger btn-block w-50 mx-auto my-3"
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
