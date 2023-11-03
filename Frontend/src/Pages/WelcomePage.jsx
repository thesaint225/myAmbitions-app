import React from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="h-[500px] bg-blue-300 text-white flex justify-center items-center ">
      <div className="">
        <h1 className="text-5xl font-semibold mb-20">Welcome to Goal App</h1>
        <Link
          to={"/goals"}
          className="bg-blue-800 text-yellow-100 flex justify-center py-5"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
