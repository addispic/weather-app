import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

// icons
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

// slices
// users
import { userSelector } from "../features/users/usersSlice";

// components
// dashboard side nav
import DashboardSideNav from "../components/DashboardSideNav";

const Dashboard = () => {
  // states from slice
  // users
  const user = useSelector(userSelector);
  // hooks
  // navigate
  const navigate = useNavigate();

  // effects
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  return (
    <div className="flex-grow flex">
      {/* content container */}
      <div className="max-w-[1524px] mx-auto px-[3%] py-[1%] flex-grow flex gap-x-10">
        {/* dashboard side nav */}
        <DashboardSideNav />
        {/* dashboard content container */}
        <div>dashboard content container</div>
        
      </div>
    </div>
  );
};

export default Dashboard;
