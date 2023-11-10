import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddGoal() {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [status, setStatus] = useState("Todo");
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine date and formatted time
    const from = `${date} ${startTime}`;
    const to = `${date} ${endTime}`;

    const formUserInput = {
      title: title,
      date: date,
      status: status,
      from: from,
      to: to,
    };
    // Log the form data to check if it's correct
    console.log("Form Data:", formUserInput);
    setFormInput(formUserInput);

    try {
      const res = await axios.post("http://localhost:1337/api/goals", {
        data: formUserInput,
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
          <div>
            <select
              id="statusSelect"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Todo">Todo</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
        <div className="block py-10">
          <label>From</label>
          <input
            type="time"
            placeholder="time"
            onChange={(e) => setStartTime(e.target.value)}
            value={startTime}
            required
          />
        </div>

        <div className="block py-10">
          <label>To</label>
          <input
            type="time"
            placeholder="time"
            onChange={(e) => setEndTime(e.target.value)}
            value={endTime}
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
