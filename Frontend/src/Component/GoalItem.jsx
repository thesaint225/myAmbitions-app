import React from "react";
import { Link } from "react-router-dom";

function GoalItem({ mygoal }) {
  return (
    <div>
      <div className="bg-white p-5 rounded-md">
        <h2 className="p-5">{mygoal.attributes.title}</h2>
        <div className="flex justify-between">
          <h2 className="pb-5">{mygoal.attributes.date}</h2>
          <h2 className="pb-5">
            {mygoal.attributes.from} {mygoal.attributes.to}
          </h2>
        </div>

        <div className="flex justify-between">
          <small className="bg-blue-300 p-1 rounded">Category</small>
          <small className="bg-blue-300 p-1 rounded">
            {mygoal.attributes.status}
          </small>
        </div>
        {/* <Link to={`/goals/${GoalItem.id}/edit`}>Edit</Link> */}
        <Link to={`/goals/${mygoal.id}/edit`}>Edit</Link>
      </div>
    </div>
  );
}

export default GoalItem;
