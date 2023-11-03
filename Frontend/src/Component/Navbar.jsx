import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-blue-600 py-5 text-white  ">
        <div className="mx-auto w-4/5 flex justify-between">
          <div>Goal APP</div>
          <div className="">
            <ul>
              <li className=" flex">
                <Link to={"/"} className="px-5">
                  WELCOME
                </Link>
                <Link to={"/goals"} className="px-5">
                  Goals
                </Link>
                <Link to={"/goals/add"} className="px-5">
                  Add A Goal
                </Link>
                <Link to={"/goals/:goalsId/edit"} className="px-5">
                  Edit Goal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar