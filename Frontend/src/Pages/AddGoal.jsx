import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddGoal() {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUserInput = {
      title: title,
    };
    setFormInput(formUserInput);

    try {
      const res = await axios.post("http://localhost:1337/api/goals", {
        data: {
          title: title,
          date: date,
        },
      });

      if (res.status === 200) {
        toast.success("Goal added successfully !", {
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
    <div className="mx-auto w-4/5 pt-20">
      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="block">Title</label>
          <input
            type="text"
            placeholder="title"
            className="block w-full p-3 border border-blue-900"
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
  );
}

export default AddGoal;
