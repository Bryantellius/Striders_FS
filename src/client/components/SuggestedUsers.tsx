import * as React from "react";
import { apiService, User } from "../utils/apiService";
import { useHistory } from "react-router-dom";

const SuggestedUsers: React.FC<SuggestedUsersProps> = () => {
  const [users, setUsers] = React.useState<any>([]);
  const history = useHistory();

  const addUser = async (userid: number) => {
    let added = await apiService(`/api/activities/addUser`, "POST", {
      id: User.userid,
      userid,
    });
  };

  React.useEffect(() => {
    (async () => {
      let users = await apiService(`/api/activities/allUsers/${User.userid}`);
      setUsers(users);
    })();
  }, []);

  return (
    <>
      <h3>Suggested Users</h3>
      <ul className="list-group">
        {users?.map((user: any) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between"
              key={`${user.id}-${user.lastname}`}
            >
              <div
                className="d-inline avatarReallySmall text-light bg-success text-center"
                onClick={() => history.push(`/user_activities/${user.id}`)}
              >
                {user.firstname[0]}
              </div>
              <span>
                {user.firstname} {user.lastname}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus-square text-success"
                onClick={() => addUser(user.id)}
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export interface SuggestedUsersProps {}

export default SuggestedUsers;
