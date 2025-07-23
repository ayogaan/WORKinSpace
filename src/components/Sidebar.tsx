"use client";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { TbBrandBooking } from 'react-icons/tb';
import { FaMoneyCheckAlt } from 'react-icons/fa';
export default function SideBar(){
    
    return (
        <div className="w-1/6 bg-gray-100 h-screen px-7 pt-3 fixed border-r-2 border-gray-200">
            <div className="brand text-gray-900 justify-between items-center text-xl flex top-30 right-30">
                <h1>Workinspace</h1>
                <h1><GiHamburgerMenu/></h1>
            </div>

            <div className='flex gap-3 text-gray-900 items-center mt-5'>
                <MdOutlineSpaceDashboard className='text-lg'/>
                <h1 className='text-lg'>Dashboard</h1>
            </div>
            <div className='flex gap-3 text-gray-900 items-center mt-3'>
                <HiOutlineOfficeBuilding className='text-lg'/>
                <h1 className='text-lg'>Spaces</h1>
            </div>
            <div className='flex gap-3 text-gray-900 items-center mt-3'>
                <TbBrandBooking className='text-lg'/>
                <h1 className='text-lg'>Bookings</h1>
            </div>
            <div className='flex gap-3 text-gray-900 items-center mt-3'>
                <FaRegCalendarAlt className='text-lg'/>
                <h1 className='text-lg'>Calendar</h1>
            </div>
            <div className='flex gap-3 text-gray-900 items-center mt-3'>
                <FaRegCalendarAlt className='text-lg'/>
                <h1 className='text-lg'>Profiles</h1>
            </div>
            <br></br>
            <br></br>
            <div className='flex gap-3 text-gray-900 items-center mt-3'>
                <FaMoneyCheckAlt className='text-lg'/>
                <h1 className='text-lg'>Subscribtion</h1>
            </div>
        </div>
    );
}