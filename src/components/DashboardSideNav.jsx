import React, {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

// icons
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { CiBoxes } from "react-icons/ci";
import { IoTvOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { BsTabletLandscape } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";


const DashboardSideNav = () => {
    // states
    // local states
    // dashboard links
    const [dashboardLinks,setDashboardLinks] = useState({
        links: [
            {
                icon: RxDashboard,
                path: "",
                text: "Dashboard"
            },
            {
                icon: CiBoxes,
                subLinks: [
                    {
                        icon: IoTvOutline,
                        path: "",
                        text: "Television"
                    },
                    {
                        icon: BsTabletLandscape,
                        path: "",
                        text: "Tablet"
                    },
                    {
                        icon: IoTvOutline,
                        path: CiMobile3,
                        text: "Phone"
                    },
                ],
                text: "Products"
            },
            {
                icon: IoChatbubblesOutline,
                path: "",
                text: "Messages"
            },
            {
                icon: FiUser,
                path: "",
                text: "Profile"
            },
        ],
        activeLink: ""
    })
  return (
    <div className="w-[17rem] h-full overflow-hidden rounded-md p-5 bg-neutral-200 flex flex-col justify-between">
          <div>
            {/* header */}
            <header className="flex items-center justify-between">
              {/* left */}
              <div>
                <p className="text-sm text-neutral-600">
                  <span>weather</span>
                  <span className="font-bold">Forecast</span>
                </p>
              </div>
              {/* right */}
              <div>
                <AiOutlineClose className="text-lg text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-700 cursor-pointer" />
              </div>
            </header>
            {/* links */}
            <div className="mt-7">
              {
                dashboardLinks.links.map((linkItem,index)=>{
                  return (
                    <div key={linkItem.text} className="mt-3">
                      {
                        !linkItem?.subLinks
                        ?
                        <NavLink className={'flex items-center  gap-x-2.5 transition-all ease-in-out duration-150 hover:bg-neutral-400 hover:bg-opacity-60 cursor-pointer p-1.5 bg-neutral-300 rounded-sm text-neutral-600'}>
                          {/* icon */}
                          <linkItem.icon />
                          {/* text */}
                          <div>
                            <span>{linkItem.text}</span>
                          </div>
                        </NavLink>
                        :
                        <div className="relative">
                            {/* header */}
                            <header className="flex items-center justify-between transition-all ease-in-out duration-150 hover:bg-neutral-400 hover:bg-opacity-60 cursor-pointer p-1.5 bg-neutral-300 rounded-sm text-neutral-600">
                                {/* left */}
                                <div className="flex items-center gap-x-2.5">
                                    {/* icon */}
                                    <linkItem.icon />
                                    {/* text */}
                                    <span>{linkItem.text}</span>
                                </div>
                                {/* toggler button */}
                                <button>
                                    <AiOutlineClose className={`rotate-45 text-sm text-neutral-700`}/>
                                </button>
                            </header>
                        </div>
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
          {/* footer */}
          <footer className="flex flex-col gap-y-3">
            {/* settings */}
            <button className="w-full flex items-center gap-x-2.5 bg-neutral-300 p-2 rounded-md transition-all ease-in-out duration-150 hover:bg-neutral-400 hover:bg-opacity-65 text-neutral-700">
              <IoSettingsOutline />
              <span>Settings</span>
            </button>
            {/* logout */}
            <button className="w-full flex items-center gap-x-2.5 bg-neutral-300 p-2 rounded-md transition-all ease-in-out duration-150 hover:bg-neutral-400 hover:bg-opacity-65 text-neutral-700">
              <IoLogOutOutline />
              <span>Logout</span>
            </button>
            
          </footer>
        </div>
  )
}

export default DashboardSideNav