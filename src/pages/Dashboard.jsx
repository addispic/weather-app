import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


// icons
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosCloudOutline } from "react-icons/io";


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
        <div className="bg-neutral-100g gap-y-3 w-full flex flex-col rounded-md">
          {/* content */}
          <div className="h-[86vh]  overflow-y-auto">
            {/* 1 */}
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                {/* icon */}
                <AiOutlineMenu className="text-lg text-neutral-500 cursor-pointer transition-colors ease-in-out duration-150 hover:text-neutral-700"/>
                {/* title */}
                <h4 className="text-neutral-700">Dashboard</h4>
              </div>
              <div className="flex items-center gap-x-1.5">
                <button className="text-xl text-neutral-600">
                  <IoIosNotificationsOutline />
                </button>
                <button className="text-xl text-neutral-600">
                  <IoIosCloudOutline />
                </button>
              </div>
            </header>
            {/* 2 */}
            <div className="mt-5 flex items-center gap-5">
              {/* left */}
              <div className="w-[50%] bg-red-300">left</div>
              {/* right */}
              <div  className="w-[50%] bg-green-300">right</div>
            </div>
          </div>
          {/* footer */}
          <footer className="px-1 bg-neutral-100 py-1.5 flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Designed by <span>addis</span><span className="font-bold">pic</span> technologies</p>
            </div>
            <div>
              <p className=" cursor-pointer text-sm text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-700 hover:underline"><span>Terms</span> & <span>Conditions</span></p>
            </div>
          </footer>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
