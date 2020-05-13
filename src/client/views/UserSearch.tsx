import * as React from "react";
import { apiService } from "../utils/apiService";
import { useParams, NavLink } from "react-router-dom";

const UserSearch: React.FC<UserSearchProps> = () => {
  const [results, setResults] = React.useState<any>([]);

  const params: any = useParams();

  const displayResults = () => {
    if (results.length > 0) {
      return (
        <ul className="list-group-flush">
          {results.map((result: any) => {
            return (
              <li
                className="list-group-item"
                key={`${result.id}-${result.lastname}-${result.firstname}`}
              >
                <NavLink to={`/user_activities/${result.id}`} className="nav-link text-dark">
                  {result.firstname} {result.lastname}
                </NavLink>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <p className="text-center my-3">Sorry, no users were found...</p>;
    }
  };

  React.useEffect(() => {
    (async () => {
      let results = await apiService(`/api/members/search/${params.user}`);
      setResults(results);
    })();
  }, []);

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center border-bottom border-dark p-2">
            Search Results
          </h1>
          {displayResults()}
        </div>
      </section>
    </main>
  );
};

export interface UserSearchProps {}

export default UserSearch;
