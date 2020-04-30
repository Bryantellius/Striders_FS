import * as React from "react";
import { NavLink } from "react-router-dom";
import { apiService, User } from '../utils/apiService'; 

const UserCard: React.FC<IUserCardProps> = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="text-center">Ben Bryant</h3>
        <div className="row mb-2">
          <div className="col-md-4 p-0 d-flex flex-column align-items-center">
            <span className="usercard">Activities</span>
            <span>3</span>
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
            <span>Run | 3 mi | 20:03 min</span>
          </div>
        </div>
        <div className="row d-flex justify-content-around align-items-center">
          <span className="usercard">View Training Log</span>
          <NavLink to={`/user_activities/1`} className="btn btn-sm btn-success">
            >
          </NavLink>
        </div>
      </div>
    </div>
  );
};

interface IUserCardProps {}

export default UserCard;
