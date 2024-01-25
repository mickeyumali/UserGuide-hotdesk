
"use client";



import Image from 'next/image'
import Desk from '../../../../../public/img/Section3/Desk.png'




export default function Section4() {

  
  
  return (
    
    <div className=' pt-10 mx-14 scroll-smooth' id='section4'>
      <div className=' mx-14' >
        <div>
         <h1 className=" text-black text-xl font-medium	">Section 4. Desk Map and Bookings</h1>
        </div>
        <div className='flex flex-row mt-8'>
         <div className='flex flex-col basis-1/2 gap-8 mt-10'>
          <h3 className=" text-blue-900 text-base ml-20 font-medium">A. Desk Map</h3>
          <p className=" text-slate-700 text-sm ml-28 flex  justify-start items-center">
          You can also look into a user's schedule based on when they booked a desk. For example in the photo, a user has reserved a desk from 8:30 a.m. to 9:00 a.m.  
          </p>
         </div>
         <div className="flex basis-1/2 justify-center items-center">
          <Image
              className=""
              src={Desk}
              alt=""
              width={250}
              height={350}
            />
        </div>
        </div>
      </div>
      
      
    </div>
  )
}
