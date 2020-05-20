import * as React from "react";
import { useHistory } from "react-router-dom";
import { apiService, User } from "../utils/apiService";

const Add: React.FC<AddProps> = () => {
  const history = useHistory();

  const [type, setType] = React.useState<string>("Run");
  const [distance, setDistance] = React.useState<number>(0);
  const [hours, setHours] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number>(0);
  const [seconds, setSeconds] = React.useState<number>(0);
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
        <div className="col-sm-6">
          <form className="form-group p-3 border shadow">
            <h6 className=" d-block mb-3 border-bottom border-info p-2">
              Type of Exercise
            </h6>
            <select
              id="type"
              className="form-control "
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Run">Run</option>
              <option value="Walk">Walk</option>
              <option value="Bike">Bike</option>
              <option value="Swim">Swim</option>
            </select>
            <h6 className=" d-block mb-3 border-bottom border-info p-2">
              Distance
            </h6>
            <div className="input-group ">
              <input
                id="distance"
                type="number"
                className="form-control"
                placeholder="0.0"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
              />
              <div className="input-group-append">
                <span className="input-group-text">miles</span>
              </div>
            </div>
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
            <h6 className=" d-block mb-3 border-bottom border-info p-2">
              Title
            </h6>
            <input
              type="text"
              className="form-control "
              placeholder="Morning Run, e.g."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h6 className=" d-block mb-3 border-bottom border-info p-2">
              Description
            </h6>
            <textarea
              className="form-control "
              placeholder="Description of activity"
              value={desciption}
              onChange={(e) => setDesciption(e.target.value)}
            />
            <button
              className="btn btn-success btn-block w-50 mx-auto my-3"
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
