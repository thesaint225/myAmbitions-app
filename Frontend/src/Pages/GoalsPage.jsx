import React from "react";
import { useState, useEffect } from "react";
import GoalItem from "../Component/goalItem";
import axios from "axios";

function GoalsPage() {
  const [goals, setGoals] = useState(null);
  useEffect(() => {
    const getGoals = async () => {
      const res = await axios.get("http://localhost:1337/api/goals");
      setGoals(res.data);
    };
    getGoals();
  }, []);
  //   ;
  //

  return (
    <div className=" min-h-screen bg-gray-100">
      <div className="mx-auto w-4/5 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {goals !== null &&
            goals.data.map((goal) => <GoalItem mygoal={goal} />)}
        </div>
      </div>
    </div>
  );
}

export default GoalsPage;
