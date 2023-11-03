import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import GoalsPage from "./Pages/GoalsPage";
import Navbar from "./Component/Navbar";
import AddGoal from "./Pages/AddGoal";
import EditGoal from "./Pages/EditGoal";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/goals" element={<GoalsPage />}></Route>
        <Route path="/goals/add" element={<AddGoal />}></Route>
        {/* <Route path="/goals/:goalId/edit" element={<EditGoal />}></Route>   */}
        <Route path="/goals/:goalId/edit" element={<EditGoal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
