import React, { useState, useEffect } from "react";
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
  const [dashboardLinks, setDashboardLinks] = useState({
    links: [
      {
        icon: RxDashboard,
        path: "",
        text: "Dashboard",
      },
      {
        icon: CiBoxes,
        subLinks: [
          {
            icon: IoTvOutline,
            path: "",
            text: "Television",
          },
          {
            icon: BsTabletLandscape,
            path: "",
            text: "Tablet",
          },
          {
            icon: CiMobile3,
            path: "",
            text: "Phone",
          },
        ],
        text: "Products",
      },
      {
        icon: IoChatbubblesOutline,
        path: "",
        text: "Messages",
      },
      {
        icon: FiUser,
        path: "",
        text: "Profile",
      },
    ],
    activeLink: "Dashboard",
    isOn: false
  });
  // side nav bar toggler
  const sideNavBarToggler = () => {
    let element = document.getElementById('dashboard-side-nav')
    if(element?.classList.contains('absolute')){
      if(element?.classList.contains('left-[-100vw]')){
        element?.classList.remove('left-[-100vw]')
        element?.classList.add('left-0')
      }else{
        element?.classList.remove('left-0')
        element?.classList.add('left-[-100vw]')
      }
    }
  }

  return (
    <div id="dashboard-side-nav" className="absolute transition-all ease-in-out duration-150 left-[-100vw] md:left-0 top-0 md:relative z-50 w-[15rem] shrink-0 h-full rounded-md p-5 bg-neutral-200 flex flex-col justify-between">
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
            <AiOutlineClose  onClick={()=>{
              sideNavBarToggler()
              setDashboardLinks(prev => {
                return {
                  ...prev,
                  isOn: false,
                }
              })
            }} className="text-lg md:hidden text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-700 cursor-pointer" />
          </div>
        </header>
        {/* links */}
        <div className="mt-7">
          {dashboardLinks.links.map((linkItem, index) => {
            return (
              <div key={linkItem.text} className="mt-3">
                {!linkItem?.subLinks ? (
                  <NavLink
                  onClick={()=>{
                    setDashboardLinks(prev => {
                        return {
                            ...prev,
                            activeLink: linkItem.text
                        }
                    })
                  }}
                    className={
                      "flex items-center  gap-x-2.5 transition-all ease-in-out duration-150 hover:bg-neutral-400 hover:bg-opacity-60 cursor-pointer p-1.5 bg-neutral-300 rounded-sm text-neutral-600"
                    }
                  >
                    {/* icon */}
                    <linkItem.icon />
                    {/* text */}
                    <div>
                      <span>{linkItem.text}</span>
                    </div>
                  </NavLink>
                ) : (
                  <div className="relative">
                    {/* header */}
                    <header className="flex items-center justify-between transition-all ease-in-out duration-150 hover:bg-neutral-400 hover:bg-opacity-60 cursor-pointer p-1.5 bg-neutral-300 rounded-sm text-neutral-600" 
                    onClick={()=>{
                        setDashboardLinks(prev => {
                            return {
                                ...prev,
                                activeLink: linkItem.text,
                                isOn: !prev?.isOn
                            }
                        })
                      }}
                    >
                      {/* left */}
                      <div className="flex items-center gap-x-2.5">
                        {/* icon */}
                        <linkItem.icon  />
                        {/* text */}
                        <span>{linkItem.text}</span>
                      </div>
                      {/* toggler button */}
                      <button>
                        <AiOutlineClose
                          className={`transition-transform ease-in-out duration-150 text-sm text-neutral-700 ${dashboardLinks.activeLink === linkItem.text && dashboardLinks.isOn ? "rotate-0" : "rotate-45"}`}
                        />
                      </button>
                    </header>
                    {/* sub links */}
                    <div className={`transition-transform ease-in-out duration-150 absolute flex flex-col w-max h-max top-1/2 -translate-y-1/2 bg-neutral-300 left-[14.5rem] ${dashboardLinks.activeLink === linkItem.text && dashboardLinks.isOn ? "scale-100" : "scale-0"}`}>
                      {/* triangle */}
                      <div className="w-[18px] z-30 aspect-square bg-inherit absolute ml-[-9px] rotate-45 left-0 top-1/2 -translate-y-1/2" />
                      {linkItem.subLinks.map((subLinkItem) => {
                        return (
                          <NavLink
                            key={subLinkItem.text}
                            className={
                              "flex items-center  gap-x-2.5 transition-all ease-in-out duration-150 hover:bg-neutral-400 relative z-50 hover:bg-opacity-60 cursor-pointer p-1.5 bg-neutral-300 rounded-sm text-neutral-600 px-5"
                            }
                          >
                            {/* icon */}
                            <subLinkItem.icon />
                            {/* text */}
                            <span>{subLinkItem.text}</span>
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
  );
};

export default DashboardSideNav;
