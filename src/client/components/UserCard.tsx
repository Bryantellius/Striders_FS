import * as React from "react";

const UserCard: React.FC<IUserCardProps> = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h3>User Name</h3>
        <div className="row mb-2">
          <div className="col-md-4 p-0 d-flex flex-column align-items-center">
            <span className="usercard">Activities</span>
            <span>89</span>
          </div>
          <div className="col-md-4 p-0 d-flex flex-column align-items-center">
            <span className="usercard text-center">Following</span>
            <span>177</span>
          </div>
          <div className="col-md-4 p-0 d-flex flex-column align-items-center">
            <span className="usercard text-center">Followers</span>
            <span>895</span>
          </div>
        </div>
        <div className="row mb-2">
        <div className="col-md-12 p-0 d-flex flex-column align-items-center">
            <span className="usercard">Last Activity</span>
            <span>Run | 3 mi | 20:32 min</span>
          </div>
        </div>
        <div className="row d-flex justify-content-around align-items-center">
          <span className="usercard">View Training Log</span>
          <button className="btn btn-sm btn-success">></button>
        </div>
      </div>
    </div>
  );
};

interface IUserCardProps {}

export default UserCard;
