import React, {useEffect, useState} from 'react'
import {NavLink,useLocation} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

// icons
import { HiOutlineHome } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

// slices
// users
import {userSelector, userLogout, profilesSelector, addNewProfile,deleteProfile} from '../features/users/usersSlice'

const Header = () => {
  // states
  // states from slice
  // users
  const user = useSelector(userSelector)
  const profiles = useSelector(profilesSelector)
  // local states
  // is profile on
  const [isProfileOn, setIsProfileOn] = useState(false)
  
  // hooks
  // dispatch
  const dispatch = useDispatch()
  // current path
  const currentPathname = useLocation().pathname 

  // add new profile handler
  const addNewProfileHandler = (e) => {
    let file = e.target.files[0]
    const imageUrl = URL.createObjectURL(file)
    dispatch(dispatch(addNewProfile(imageUrl)))
  }

  // delete profile
  const deleteProfileHandler = _id => {
    dispatch(deleteProfile(_id))
  }

  return (
    <header className='bg-white border-b border-neutral-300 fixed left-0 top-0 w-full z-50'>
      {/* content */}
      <div className='max-w-[1524px] mx-auto px-[3%] flex items-center justify-between'>
        {/* left section */}
        <div>
          {/* site logo */}
          <NavLink to={"/"}>
            <p className='text-lg py-1 font-medium text-green-600 transition-colors ease-in-out duration-150 hover:text-green-500'>weather <span className='font-black uppercase'>Forecast</span></p>
          </NavLink>
        </div>
        {/* right section */}
        <div className='flex items-center justify-between gap-x-7'>
          {/* links */}
          <div className='flex items-center justify-center gap-x-5'>
            {/* home link */}
            <NavLink to={'/'} className={`relative flex items-center justify-center gap-1.5 after:absolute after:left-0 after:bottom-0  after:h-[2px] after:bg-green-600 after:transition-all after:ease-in-out after:duration-150  ${currentPathname === "/" ? "after:w-full text-green-700" : "after:w-0 hover:after:w-full text-neutral-500"}`}>
            {/* icon */}
            <HiOutlineHome className='text-lg'/>
            {/* text */}
            <span>Home</span>
            </NavLink>
            {/* dashboard and login link */}
            {
              user 
              ?
              <NavLink to={"/dashboard"} className={`relative flex items-center justify-center gap-1.5  after:absolute after:left-0 after:bottom-0  after:h-[2px] after:bg-green-600 after:transition-all after:ease-in-out after:duration-150  ${currentPathname === "/dashboard" ? "after:w-full text-green-700" : "after:w-0 hover:after:w-full text-neutral-500"}`}>
                {/* icon */}
            <RxDashboard className='text-lg'/>
            {/* text */}
            <span>Dashboard</span>
              </NavLink>
              :
              <NavLink to={"/login"} className={'px-3 py-0.5 rounded-full transition-colors ease-in-out duration-150 hover:bg-green-500 bg-green-600 text-white text-sm'}>Login</NavLink>
            }
            {/* da */}
          </div>
          {/* user */}
          {
            user 
            ?
            <div className='relative'>
              {/* username and profile */}
              <div className='flex items-center gap-x-1 cursor-pointer' onClick={()=>{
                setIsProfileOn(!isProfileOn)
              }}>
                <span className='text-sm text-green-700'>{user?.username}</span>
                <div className='w-[24px] aspect-square rounded-full overflow-hidden'>
                  {
                    profiles?.length > 0 
                    ?
                    <img className='w-full h-full object-center object-cover' src={profiles[0].image} alt="" />
                    :
                  <img className='w-full h-full object-center object-cover' src="https://as1.ftcdn.net/jpg/03/46/83/96/220_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" />
                  }
                </div>
                <MdKeyboardArrowDown className={`text-green-600 text-lg transition-transform ease-in-out duration-150 ${isProfileOn ? "-rotate-180" : "rotate-0"}`}/>
              </div>
              {/* pop up */}
              <div className={`absolute right-0 bg-transparent top-[2rem] overflow-hidden transition-all ease-in-out duration-300 ${isProfileOn ? "h-[35rem]" : "h-0"}`}>
                {/* content */}
                <div className='bg-white rounded-md  border border-neutral-200 shadow-lg p-5 relative mt-3 mx-3'>
                  {/* triangle */}
                  <div className='absolute right-3 w-[14px] rotate-45 mt-[-7px] top-0 aspect-square bg-white border border-neutral-200 border-b-transparent border-r-transparent'/>
                  {/* profile */}
                  <div>
                    {/* image */}
                    <div className='mx-auto w-[120px] aspect-square bg-green-600 relative overflow-hidden rounded-md'>
                      {
                        profiles?.length > 0 
                        ?
                        <img className='w-full h-full object-cover object-center' src={`${profiles[0].image}`} alt="" />
                        :
                        <img className='w-full h-full object-cover object-center' src="https://as1.ftcdn.net/jpg/03/46/83/96/220_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" />
                      }
                      {/* delete profile button */}
                      {
                        profiles?.length > 0 && 
                      <div className='absolute top-0 right-0'>
                        <button className='w-[20px] aspect-square rounded-full flex items-center justify-center overflow-hidden bg-white text-red-500' onClick={()=> {
                          deleteProfileHandler(profiles[0]._id)
                        }}>
                          <RiDeleteBinLine />
                        </button>
                      </div>
                      }
                    </div>
                    {/* navigator */}
                    <div className='flex items-center justify-center gap-x-3 mt-2'>
                      {/* prev button */}
                      {
                        profiles?.length > 1 && 
                      <button>
                        <FaChevronLeft className='text-green-600 '/>
                      </button>
                      }
                      {/* pick file */}
                      <input type="file" id='profile-picker' accept='image/*' hidden onChange={addNewProfileHandler} />
                      <label htmlFor="profile-picker">
                        <div className='cursor-pointer w-[22px] flex items-center justify-center text-white rounded-full overflow-hidden aspect-square bg-green-600'>
                          <FaCamera className='text-sm'/>
                        </div>
                      </label>
                      {/* next button */}
                      {
                        profiles?.length > 1 && 
                      <button>
                      <FaChevronLeft className='text-green-600 rotate-180'/>
                      </button>
                      }
                    </div>
                    {/* user detail */}
                    <div className='mt-1.5 pt-3 flex flex-col items-center justify-center'>
                      {/* bar */}
                      <div className='w-[100%] h-[1px] bg-green-600'></div>
                      <div className='flex items-center justify-between gap-x-1 py-1.5 text-sm text-neutral-600'>
                        <p className='whitespace-nowrap flex flex-col items-center'>
                          <span>{user?.username}</span> <span>{user?.email}</span></p>
                      </div>
                        <button className='w-full border border-green-600 text-sm mt-2.5 py-0.5 rounded-sm flex items-center justify-between px-1.5 text-green-600 transition-colors ease-in-out duration-150 hover:bg-green-600 hover:text-white' onClick={()=>{
                          setIsProfileOn(false)
                          dispatch(userLogout())
                        }}>
                          <span>Logout</span>
                          <IoIosLogOut className='text-lg'/>
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            null
          }
        </div>
      </div>
    </header>
  )
}

export default Header