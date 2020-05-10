import * as React from "react";
import type { IActivity } from "../utils/types";
import { useHistory } from "react-router-dom";
import moment from "moment";

const ActivityCard: React.FC<ActivityCardProps> = (props) => {
  const history = useHistory();
  const handleClick = () => history.push(`/activity/${props.entry.id}`);

  return (
    <div className="card my-2 p-3 shadow-sm">
      <span>
        {props.entry.firstname} {props.entry.lastname}
      </span>
      <small className="text-muted">
        {moment(props.entry.date).format("MMM Do")}
      </small>
      <h3 onClick={handleClick}>{props.entry.title}</h3>
      <p className="d-flex justify-content-around pt-3">
        {props.entry.description}
      </p>
    </div>
  );
};

export interface ActivityCardProps {
  entry: IActivity;
}

export default ActivityCard;
