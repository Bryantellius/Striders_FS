import * as React from "react";
import type { IActivity } from "../utils/types";
import { useHistory } from "react-router-dom";
import { apiService } from "../utils/apiService";
import ActivityCard from "./ActivityCard";

const MoreActivities: React.FC<MoreActivitiesProps> = (props) => {
  const [activities, setActivities] = React.useState<IActivity[]>([]);

  React.useEffect(() => {
    (async () => {
      let activities = await apiService(`/api/activities/user/${props.userid}`);
      setActivities(activities);
    })();
  }, []);

  return (
    <>
      {activities?.map((activity) => {
        return <ActivityCard entry={activity}/>;
      })}
    </>
  );
};

export interface MoreActivitiesProps {
  userid: number;
}

export default MoreActivities;
