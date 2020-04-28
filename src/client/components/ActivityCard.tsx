import * as React from "react";
import type { IActivity } from "../utils/types";
import { useHistory } from "react-router-dom";
import moment from "moment";

const ActivityCard: React.FC<ActivityCardProps> = (props) => {
  const history = useHistory();
  const handleClick = () => history.push(`/activity/${props.entry.id}`);

  return (
    <li
      className="list-group-item list-group-item-action my-2"
      onClick={handleClick}
    >
      <h5>
        {props.entry.firstname} {props.entry.lastname}
      </h5>
      <p className="d-flex justify-content-around pt-3">
        <span>{props.entry.type}</span>
        <span>{props.entry.distance} mi</span>
        <span>{props.entry.duration} min</span>
      </p>
      <hr />
      <div className="d-flex justify-content-end align-items-center">
        <small className="text-muted">
          {moment(props.entry.date).format("MMM Do")}
        </small>
      </div>
    </li>
  );
};

export interface ActivityCardProps {
  entry: IActivity;
}

export default ActivityCard;
