import React, { useState } from 'react'
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa'
import Photo from "../assets/Photo.png"

const Dashboardview = () => {
    const [open, setOpen] = useState(false)

    const showDropDown = () => {
        setOpen(!open)
    }
    return (
        <div className='flex items-center justify-between h=[70px] shadow-lg border-black px-[25px] bg-[#193da0e9]'>
            <div className='flex items-center rounded=[5px]'>
                <input type='text' className='bg-[#233b84] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] placeholder:text-[#c7cad8] text-white leading-[20px] font-normal' placeholder='Search for...' />
                <div className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
                    <FaSearch color='#c7cad8' />
                </div>
            </div>
            <div className='flex items-center gap-[15px] relative'>
                <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                    <FaRegBell className='cursor-pointer text-[#c7cad8] hover:text-[#4E73DF]'/>
                    <FaEnvelope className='cursor-pointer text-[#c7cad8] hover:text-[#4E73DF]'/>
                </div>
                <div className='flex items-center gap-[15px] relative' onClick={showDropDown}>
                    <p className='cursor-pointer text-[#c7cad8] font-semibold hover:text-[#4E73DF]'>My Profile</p>
                    <div className='h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative'>
                        <img className='rounded-full' src={Photo} alt='Avatar' />
                    </div>
                    {
                        open &&
                        <div className='bg-[#211970] border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[10px] space-y-[10px]'>
                            <p className='cursor-pointer hover:text-[blue] font-semibold'>Profile</p>
                            <p className='cursor-pointer hover:text-[blue] font-semibold'>Settings</p>
                            <p className='cursor-pointer hover:text-[blue] font-semibold'>Log Out</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboardview