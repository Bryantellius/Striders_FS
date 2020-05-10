import * as React from "react";
import type { IActivity } from "../utils/types";
import { useHistory } from "react-router-dom";
import moment from "moment";

const ActivityCard: React.FC<ActivityCardProps> = (props) => {
  const history = useHistory();
  const handleClick = () => history.push(`/activity/${props.entry.id}`);

  return (
    <div className="card my-2 p-3 border-light shadow-sm">
      <span>
        {props.entry.firstname} {props.entry.lastname}
      </span>
      <small className="text-muted">
        {moment(props.entry.date).format("MMM Do LT")}
      </small>
      <h3 onClick={handleClick}>{props.entry.title}</h3>
      <p>{props.entry.desciption}</p>
      <div className="row">
        <div className="col-sm-4 d-flex flex-column align-items-center">
          <small className="text-muted">Type</small>
          <span>{props.entry.type}</span>
        </div>
        <div className="col-sm-4 d-flex flex-column align-items-center">
          <small className="text-muted">Distance</small>
          <span>{props.entry.distance}mi</span>
        </div>
        <div className="col-sm-4 d-flex flex-column align-items-center">
          <small className="text-muted">Duration</small>
          <span>{props.entry.duration}</span>
        </div>
      </div>
    </div>
  );
};

export interface ActivityCardProps {
  entry: IActivity;
}

export default ActivityCard;
