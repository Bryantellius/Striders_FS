import * as React from "react";
import { useHistory } from "react-router-dom";
import { apiService, User } from "../utils/apiService";

const Add: React.FC<AddProps> = () => {
  const history = useHistory();

  const [type, setType] = React.useState<string>("Run");
  const [distance, setDistance] = React.useState<string>("");
  const [hours, setHours] = React.useState<string>("");
  const [minutes, setMinutes] = React.useState<string>("");
  const [seconds, setSeconds] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [desciption, setDesciption] = React.useState<string>("");

  const addAct = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const activity = {
      type,
      distance,
      duration: `${hours}:${minutes}:${seconds}`,
      userid: User.userid,
      title,
      desciption,
    };
    const result = await apiService(`/api/activities`, "POST", activity);
    history.push(`/`);
  };

  React.useEffect(() => {
    if (!User || User.userid === null || User.role !== "guest") {
      console.log(`Didn't recognize user`);
      history.push("/sign_up");
    }
  }, []);

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-8">
          <form className="form-group p-3 border shadow">
            <h6 className="w-50 mx-auto d-block mb-3 border-bottom border-info p-2">
              Type of Exercise
            </h6>
            <select
              id="type"
              className="form-control w-50 mx-auto"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Run">Run</option>
              <option value="Walk">Walk</option>
              <option value="Bike">Bike</option>
              <option value="Swim">Swim</option>
            </select>
            <h6 className="w-50 mx-auto d-block mb-3 border-bottom border-info p-2">
              Distance
            </h6>
            <input
              id="distance"
              className="form-control w-50 mx-auto"
              placeholder="0.0"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
            <h6 className="w-50 mx-auto d-block mb-3 border-bottom border-info p-2">
              Duration
            </h6>
            <div className="input-group w-50 mx-auto">
              <input
                type="text"
                className="form-control text-center"
                placeholder="00"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />
              <div className="input-group-append">
                <span className="input-group-text">:</span>
              </div>
              <input
                type="text"
                className="form-control text-center"
                placeholder="00"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
              />
              <div className="input-group-append">
                <span className="input-group-text">:</span>
              </div>
              <input
                type="text"
                className="form-control text-center"
                placeholder="00"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
              />
            </div>
            <h6 className="w-50 mx-auto d-block mb-3 border-bottom border-info p-2">
              Title
            </h6>
            <input
              type="text"
              className="form-control w-50 mx-auto"
              placeholder="Morning Run, e.g."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h6 className="w-50 mx-auto d-block mb-3 border-bottom border-info p-2">
              Description
            </h6>
            <textarea
              className="form-control w-50 mx-auto"
              placeholder="Description of activity"
              value={desciption}
              onChange={(e) => setDesciption(e.target.value)}
            />
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
