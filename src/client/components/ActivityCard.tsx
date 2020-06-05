import * as React from "react";
import type { IActivity } from "../utils/types";
import { averagePace } from "../utils/Functions";
import { useHistory } from "react-router-dom";
import moment from "moment";

const ActivityCard: React.FC<ActivityCardProps> = (props) => {
  const history = useHistory();
  const handleClick = () => history.push(`/activity/${props.entry.id}`);

  return (
    <div className="card my-2 p-3 border-light shadow-sm">
      <div className="d-flex mb-3">
        <div
          className="avatarSmall text-light bg-success text-center mr-2"
          onClick={() => history.push(`/user_activities/${props.entry.userid}`)}
        >
          {props.entry.firstname[0]}
        </div>
        <div className="d-flex flex-column">
          <span>
            {props.entry.firstname} {props.entry.lastname}
          </span>
          <small className="text-muted">
            {moment(props.entry.date).format("MMM Do LT")}
          </small>
        </div>
      </div>
      <h3 className="activityTitle" onClick={handleClick}>
        {props.entry.title}
      </h3>
      <p>{props.entry.desciption}</p>
      <div className="row">
        <div className="col-sm-3 d-flex flex-column align-items-center">
          <small className="text-muted">Type</small>
          <span>{props.entry.type}</span>
        </div>
        <div className="col-sm-3 d-flex flex-column align-items-center">
          <small className="text-muted">Distance</small>
          <span>{props.entry.distance}mi</span>
        </div>
        <div className="col-sm-3 d-flex flex-column align-items-center">
          <small className="text-muted">Duration</small>
          <span>{`${props.entry.hrs}h ${props.entry.min}m ${props.entry.sec}s`}</span>
        </div>
        <div className="col-sm-3 d-flex flex-column align-items-center">
          <small className="text-muted">Pace</small>
          <span>
            {averagePace(
              props.entry.hrs,
              props.entry.min,
              props.entry.sec,
              props.entry.distance
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export interface ActivityCardProps {
  entry: IActivity;
}

export default ActivityCard;
