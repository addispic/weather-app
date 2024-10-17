import React from 'react'
import {NavLink} from 'react-router-dom'

// icons
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div className='mt-1.5 max-h-[93vh] overflow-y-auto'>
      {/* 1 */}
      <div className='max-w-[1524px] mx-auto px-[3%]'>
        <div className='w-full rounded-lg overflow-hidden p-3 relative'>
          {/* bg-1 */}
          <div className='absolute z-10 left-0 top-0 w-full h-full flex'>
            <div className='w-[40%] h-full bg-black'/>
            <div className='w-[45%] h-full bg-gradient-to-r from-black to-transparent'/>
            <div className='w-[15%] h-full bg-transparent'/>
          </div>
          {/* bg-2 */}
          <div className='absolute left-0 top-0 w-full h-full z-0'>
            <img className='w-full h-full object-center object-cover' src="https://www.webworxtechnology.com/wp-content/uploads/2018/06/web-development.jpg" alt="" />
          </div>
          {/* content */}
          <div className='w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] p-5 py-10 relative z-30 text-white'>
            <h1 className='text-3xl font-black'>Weather Forecast</h1>
            <p className='my-7 text-sm text-neutral-200 md:text-neutral-400'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In obcaecati nesciunt est ipsa nam harum perferendis reprehenderit explicabo, animi ipsam nulla rem nihil deserunt?
            </p>
            <NavLink to={"/dashboard"} className='flex items-center gap-x-1.5 px-5  py-2 border  rounded-full w-max border-white bg-white text-green-600 transition-colors ease-in-out duration-150 hover:border-green-500 hover:bg-green-500 hover:text-white'>
              <span>Dashboard</span>
              <GoArrowRight className='text-xl'/>
            </NavLink>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className='max-w-[1524px] mx-auto px-[3%] my-12 md:my-20'>
        <div className='flex items-center gap-x-12 gap-y-5 flex-col-reverse md:flex-row'>
          <div className='w-full h-[200px] md:h-auto md:w-[50%] overflow-hidden'>
            <img className='w-full h-full object-center object-cover' src="http://sitegalleria.com/wp-content/uploads/2019/08/Web-Development-and-Web-Design-Company.png" alt="" />
          </div>
          <div className='w-full md:w-[50%] py-10'>
            <h1 className='text-3xl font-bold'>Who we are</h1>
            <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id consequuntur voluptates velit nulla quam, aperiam facilis minima consectetur vitae et doloribus hic molestiae at a numquam repudiandae quaerat aut animi? Alias, maiores?</p>
            <button className='px-3 py-2 bg-green-600 text-white mt-3'>Learn more</button>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className='max-w-[1524px] mx-auto px-[3%] my-10'>
        <div>
          <p className='max-w-[720px] mx-auto mt-3 text-center text-neutral-600 text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, nemo alias, natus veritatis voluptas iure laborum ad soluta illo, blanditiis similique culpa mollitia nobis?
          </p>
        </div>
      </div>
      {/* 4 */}
      <div className='max-w-[1524px] mx-auto px-[3%] my-10'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-10 gap-y-3'>
          {
            [...Array(4)].map((item,index)=>{
              return (
                <div className='rounded-md overflow-hidden bg-white shadow-lg'>
                  {/* image */}
                  <div className='w-full h-[120px] rounded-md overflow-hidden'>
                    <img className='w-full h-full object-center object-cover' src="https://www.insurtechinsights.com/wp-content/uploads/2023/06/original.jpeg" alt="" />
                  </div>
                  <div className='p-3'>
                    <div className='text-sm text-neutral-600'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae quia accusantium mollitia.</p>
                    </div>
                    <button className='w-[24px] aspect-square border border-green-600 flex items-center justify-center mt-2 rounded-full text-green-600'>
                      <GoArrowRight />
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home