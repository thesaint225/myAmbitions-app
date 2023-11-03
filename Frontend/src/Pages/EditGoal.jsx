import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditGoal = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const navigate = useNavigate();
  const { goalId } = useParams(); // Correct way to access the parameter

  useEffect(() => {
    const getSingleGoal = async () => {
      const res = await axios.get(`http://localhost:1337/api/goals/${goalId}`);
      const goal = res.data;
      console.log(goal);

      if (goal) {
        setTitle(goal.data.attributes.title);
        setDate(goal.data.attributes.date);
      }
    };
    getSingleGoal();
  }, [goalId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUserInput = {
      title: title,
    };
    // setFormInput(formUserInput);

    try {
      const res = await axios.put(`http://localhost:1337/api/goals/${goalId}`, {
        data: {
          title: title,
          date: date,
        },
      });

      if (res.status === 200) {
        toast.success("Goal updated successfully !", {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          return navigate("/goals");
        }, 5000);
      }
    } catch (error) {
      console.log(error.response.data.error.message);
      toast.error(error.response.data.error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <div className="mx-auto w-4/5 pt-20">
        <ToastContainer />

        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="block">Title</label>
            <input
              type="text"
              placeholder="title"
              className="block w-full p-3 border border-blue-900"
              value={title ? title : ""}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="">
            <label className="block">Date</label>
            <input
              type="date"
              placeholder="Date"
              className="block w-full p-3 border border-blue-900"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <input
            type="submit"
            value="Add Goal"
            className="mt-20 bg-blue-700
          p-3 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default EditGoal;
