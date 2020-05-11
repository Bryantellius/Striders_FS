import * as React from "react";
import { NavLink } from "react-router-dom";
import { User, apiService } from "../utils/apiService";
import { IActivity } from "../utils/types";

const UserCard: React.FC<IUserCardProps> = (entries) => {
  const [user, setUser] = React.useState<any>([]);

  React.useEffect(() => {
    (async () => {
      let user = await apiService(
        `/api/activities/user_details/${User.userid}`
      );
      setUser(user);
    })();
  }, []);

  return (
    <div className="card border-light shadow-sm">
      {user.map((user: any) => {
        return (
          <div
            className="card-body d-flex flex-column align-items-center"
            key={`${user.id}-${user.firstname}`}
          >
            <div className="avatarSmall bg-success text-light text-center">
              {user.firstname[0]}
            </div>
            <h3 className="text-center">
              {user.firstname} {user.lastname}
            </h3>
            <div className="d-flex w-100 mb-2">
              <div className="col-md-6 p-0 d-flex flex-column align-items-center">
                <span className="usercard">Activities</span>
                <span>{user.activities}</span>
              </div>
              <div className="col-md-6 p-0 d-flex flex-column align-items-center">
                <span className="usercard text-center">Followers</span>
                <span>{user.followers}</span>
              </div>
            </div>
            <div className="row">
              <NavLink
                to={`/user_activities/${user.id}`}
                className="nav-link text-success"
              >
                View Profile
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface IUserCardProps {
  entries: IActivity[];
}

export default UserCard;
