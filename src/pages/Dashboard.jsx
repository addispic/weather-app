import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Chart from 'react-apexcharts'


// icons
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosCloudOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaCloudMoonRain } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { IoWarning } from "react-icons/io5";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { MdSignalWifiConnectedNoInternet4 } from "react-icons/md";


// slices
// users
import { userSelector } from "../features/users/usersSlice";
// weather
import {weatherDataSelector,errorSelector,getCityWeatherData, isLoadingSelector} from '../features/weather/weatherSlice'

// components
// dashboard side nav
import DashboardSideNav from "../components/DashboardSideNav";

const Dashboard = () => {
  // states from slice
  // users
  const user = useSelector(userSelector);
  // weather
  const weatherData = useSelector(weatherDataSelector)
  const error = useSelector(errorSelector)
  const isLoading = useSelector(isLoadingSelector)
  // local state
  // city name
  const [cityName,setCityName] = useState("")
  
  // hooks
  // navigate
  const navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch()
  // is focus
  const [isFocus,setIsFocus] = useState(false)
  // histories
  const [histories,setHistories] = useState([
    {
      icon: MdOutlineFacebook,
      title: 'Facebook',
      text: '',
      customers: '1.73M',
      percent: '75%'
    },
    {
      icon: FaTwitter,
      title: 'Twitter',
      text: '',
      customers: '0.3M',
      percent: '35%'
    },
    {
      icon: AiFillInstagram,
      title: 'Instagram',
      text: '',
      customers: '.75M',
      percent: '45%'
    },
    {
      icon: FaGithub,
      title: 'Github',
      text: '',
      customers: '.1M',
      percent: '13%'
    },
    {
      icon: FaLinkedin,
      title: 'Linkedin',
      text: '',
      customers: '3.0M',
      percent: '95%'
    },
    {
      icon: AiFillTikTok,
      title: 'Tiktok',
      text: '',
      customers: '1.73M',
      percent: '75%'
    },
  ])

  // effects
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
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

  // search city
  const searchCityHandler = () => {
    if(cityName?.trim()){
      dispatch(getCityWeatherData(cityName))
    }
  }

  return (
    <div className="flex-grow flex">
      {/* content container */}
      <div className="max-w-[1524px] mx-auto px-[3%] py-[1%] flex-grow flex gap-x-10 relative">
        {/* dashboard side nav */}
        <DashboardSideNav />
        {/* dashboard content container */}
        <div className="bg-neutral-100g gap-y-3 flex-grow flex flex-col rounded-md">
          {/* content */}
          <div className="h-[86vh]  overflow-y-auto pr-2">
            {/* 1 */}
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                {/* icon */}
                <AiOutlineMenu onClick={sideNavBarToggler} className="text-lg text-neutral-500 md:hidden cursor-pointer transition-colors ease-in-out duration-150 hover:text-neutral-700"/>
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
            <div className="mt-5 flex flex-col-reverse lg:flex-row gap-5">
              {/* left */}
              <div className="w-full lg:w-[50%] bg-red-100 gap-y-5 p-5 rounded-md flex flex-col">
                {/* top */}
                <div className="bg-white shadow-lg p-3 rounded-md flex items-center justify-between">
                  <div>

                  <p className="text-sm text-neutral-400">My Chart</p>
                  <span className="text-xs">latest updates</span>
                  </div>
                  <div className="flex items-center justify-end gap-x-3">
                    <FaTwitter className="text-sky-500"/>
                    <FaGithub className="text-green-500"/>
                    <AiFillInstagram className="text-orange-500"/>
                  </div>
                </div>
                {/* bottom */}
                <div className="flex-grow bg-white p-3 rounded-md shadow-lg ">
                  <Chart height={170} series={[
                    {
                      name: 'max temp',
                      data: [0,87,65,100,15,23,98,3,90,50]
                    },
                    {
                      name: 'min tem',
                      data: [7,9,100,55,93,0,43,90,50,100]
                    },
                  ]} options={{
                    chart: {
                      zoom: {
                        enabled: false
                      },
                      toolbar: {
                        show: false
                      }
                    },
                    stroke: {
                      width: 1,
                      curve: 'smooth'
                    },
                    colors: ['#02bd18', '#0456d1']
                  }}/>
                </div>
              </div>
              {/* right */}
              <div  className="w-full lg:w-[50%] bg-green-100 p-5 rounded-md">
                {/* header */}
                <header>
                  <div className={`flex items-center gap-x-1.5 bg-white rounded-md overflow-hidden p-2 border ${isFocus ? "border-green-300" : "border-transparent"}`}>
                    <input value={cityName} onChange={e=>setCityName(e.target.value)} onFocus={()=>{
                      setIsFocus(true)
                    }} onBlur={()=>{
                      setIsFocus(false)
                    }} className="w-full focus:ring-0 focus:outline-none bg-transparent" type="text" placeholder="search by city" />
                    {
                      isLoading
                      ?
                      <div className="w-[16px] rounded-full aspect-square border-2 border-green-500 border-r-transparent animate-spin"/>
                      :

                    <CiSearch onClick={searchCityHandler} className={`text-xl cursor-pointer ${isFocus ? "text-green-600" : "text-gray-500"}`}/>
                    }
                  </div>
                </header>
                {/* content */}
                {
                  error 
                  ?
                  <>
                  {
                    error === "NETWORK_ERROR"
                    ?
                    <div className="mt-7 p-5 bg-white rounded-md">
                      {/* icon */}
                      <div className="flex items-center justify-center">
                        <div className="w-[72px] aspect-square rounded-full border bg-red-100 border-red-600 flex items-center justify-center text-2xl text-red-600">
                          <MdSignalWifiConnectedNoInternet4 />
                        </div>
                      </div>
                      {/* text */}
                      <p className="text-center text-sm text-red-600 max-w-[200px] mx-auto mt-3">
                      Data retrieval failed. Please check your internet connection and try again.
                      </p>
                    </div>
                    :
                    error === "CITY_NOT_FOUND" 
                    ?
                    <div className="mt-7 p-5 bg-white rounded-md">
                      {/* icon */}
                      <div className="flex items-center justify-center">
                        <div className="w-[72px] aspect-square rounded-full border bg-orange-100 border-orange-500 flex items-center justify-center text-2xl text-orange-500">
                          <IoWarning />
                        </div>
                      </div>
                      {/* text */}
                      <p className="text-center text-sm text-orange-500 max-w-[200px] mx-auto mt-3">
                      The city name you entered does not have available weather data. Please check it and try again.
                      </p>
                    </div>
                    :null
                  }
                  </>
                  :
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-7">
                  {/* left */}
                  <div className="bg-white p-5 rounded-md overflow-hidden">
                    {/* image */}
                    <div className="flex items-center justify-center">
                      <div className="w-[100px] aspect-square overflow-hidden">
                        <img className="w-full h-full object-center object-contain" src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="" />
                      </div>
                    </div>
                    {/* title */}
                    <h3 className="text-center my-3 font-mon text-4xl">{weatherData?.temp}<sup>o</sup>C</h3>
                    {/* city */}
                    <p className="text-center text-lg font-bold text-neutral-600 flex items-center justify-center gap-x-3">
                      <CiLocationOn />
                      {weatherData?.cityName}</p>
                  </div>
                  {/* right */}
                  <div className="flex flex-col justify-between">
                    {/* temperature */}
                    <div className="bg-white rounded-md p-5">
                    {/* header */}
                    <header className="flex items-center gap-x-1.5 border-b border-neutral-200">
                      {/* icon */}
                      <div>
                        <TbTemperatureCelsius className="text-3xl text-sky-600"/>
                      </div>
                      {/* text */}
                      <p className="text-neutral-500 text-sm font-medium">Temperature</p>
                    </header>
                    <div className="flex flex-wrap flex-row items-center gap-x-3 mt-2">
                      {/* min */}
                      <div className="flex items-center gap-x-2">
                        {/* icon */}
                        <FaTemperatureArrowDown className="text-sm text-neutral-400" />
                        <span className="text-sm font-bold text-red-500">{weatherData?.minTemp}<sup>o</sup>C</span>
                      </div>
                      {/* max */}
                      <div className="flex items-center gap-x-2">
                        {/* icon */}
                        <FaTemperatureArrowUp className="text-sm text-neutral-400"/>
                        <span className="text-sm font-bold text-green-500">{weatherData?.maxTemp}<sup>o</sup>C</span>
                      </div>
                    </div>
                    </div>
                    <div className="bg-white rounded-md p-5 flex items-center gap-x-3 mt-5">
                      {/* icon */}
                      <div className="w-[64px] aspect-square border border-neutral-300 flex items-center justify-center rounded-md">
                        <FaCloudMoonRain className="text-3xl text-sky-500"/>
                      </div>
                      {/* text */}
                      <div>
                        <h4 className="text-xl font-bold text-neutral-600">{weatherData?.humidity}%</h4>
                        <p className="text-sm">Humidity</p>
                      </div>
                    </div>
                  </div>
                </div>
                }
              </div>
            </div>
            <div className="my-5 text-sm text-neutral-500">
              <p>
              This global website presents OFFICIAL weather observations, weather forecasts and climatological information for selected cities supplied by National Meteorological & Hydrological Services (NMHSs) worldwide.
              </p>
            </div>
            {/* 4 */}
            <div >
              <h1 className="font-bold text-neutral-600">
                My Campaigns
              </h1>
              {/* grid */}
              <div className="mt-3 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
                {
                  histories.map((listItem,index)=>{
                    return (
                      <div key={listItem.title} className={`
                       rounded-md p-3 ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-sky-100' : index === 2 ? 'bg-purple-100' : index === 3 ? 'bg-green-100' : index === 4 ? 'bg-sky-200' : 'bg-neutral-100'}`}>
                        <div className="flex items-center gap-x-1.5">
                          <div className="w-[26px] aspect-square bg-white rounded-md flex items-center justify-center text-green-600">
                            <listItem.icon className={`${index === 0 ? 'text-blue-600' : index === 1 ? 'text-sky-600' : index === 2 ? 'text-purple-600' : index === 3 ? 'text-green-600' : index === 4 ? 'text-sky-600' : 'text-neutral-600'}`}/>
                          </div>
                          <p className="font-medium text-sm">{listItem.title}</p>
                        </div>
                        <p className="my-3 font-medium text-sm">
                          Uniting for inclusion and diversity 
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs">
                            <span className="font-bold">{listItem.customers}</span> <span>customers</span>
                          </div>
                          <div className="flex text-xs items-center justify-end gap-1">
                            <FaArrowTrendUp />
                            <span>{listItem.percent}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
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
