import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


// icons
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosCloudOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { TiWeatherDownpour } from "react-icons/ti";


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
  // is focus
  const [isFocus,setIsFocus] = useState(false)

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
            <div className="mt-5 flex gap-5">
              {/* left */}
              <div className="w-[50%] bg-red-300">left</div>
              {/* right */}
              <div  className="w-[50%] bg-green-100 p-5 rounded-md">
                {/* header */}
                <header>
                  <div className={`flex items-center gap-x-1.5 bg-white rounded-md overflow-hidden p-2 border ${isFocus ? "border-green-300" : "border-transparent"}`}>
                    <input onFocus={()=>{
                      setIsFocus(true)
                    }} onBlur={()=>{
                      setIsFocus(false)
                    }} className="w-full focus:ring-0 focus:outline-none bg-transparent" type="text" placeholder="search by city" />
                    <CiSearch className={`text-xl ${isFocus ? "text-green-600" : "text-gray-500"}`}/>
                  </div>
                </header>
                {/* content */}
                <div className="grid grid-cols-2 gap-10 mt-7">
                  {/* left */}
                  <div className="w-[50%]c bg-white p-5 rounded-md overflow-hidden">
                    {/* image */}
                    <div className="flex items-center justify-center">
                      <div className="w-[100px] aspect-square overflow-hidden">
                        <img className="w-full h-full object-center object-contain" src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="" />
                      </div>
                    </div>
                    {/* title */}
                    <h3 className="text-center my-3 font-mon text-4xl">24<sup>o</sup>C</h3>
                    {/* city */}
                    <p className="text-center text-lg font-bold text-neutral-600 flex items-center justify-center gap-x-3">
                      <CiLocationOn />
                      Addis Ababa</p>
                  </div>
                  {/* right */}
                  <div className="w-[50%]c bg-white h-full rounded-md overflow-hidden grid grid-cols-2 gap-10 p-5">
                    {
                      [...Array(4)].map((item,index)=>{
                        return (
                          <div className="py-2 px-1">
                            <div className="flex items-center gap-3 mb-1.5">
                            {/* icon */}
                            <div className="p-1.5 w-[32px] aspect-square text-xl text-green-500 border border-neutral-300 rounded-md flex items-center justify-center">
                              <TiWeatherDownpour />
                            </div>
                              <p className="text-lg font-medium">45%</p>
                            </div>
                            {/* text */}
                            <div className="text-sm text-neutral-500">
                              <p>humidity</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
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
