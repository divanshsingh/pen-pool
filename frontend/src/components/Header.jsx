import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { LuPenSquare } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  return (
        <>
        <Navbar className='border-b-[0.5px] h-16 border-zinc-400 py-[1rem] px-6 flex justify-between items-center'>
            <Link to={"/"}>
            <h1 className='text-2xl font-[Poppins]'>PenPool</h1>
            </Link>
            <div className='w-[40%] relative hidden lg:flex'>
                <IoIosSearch className='absolute text-2xl right-4 bottom-2 text-zinc-500'/>
                <input type="text" placeholder='Search...' className='rounded-3xl bg-zinc-100 w-full py-[0.4rem] border-none focus:border-zinc-700 placeholder:text-zinc-500 outline-none'/>
            </div>
            <div className='flex items-center justify-center gap-4 font-light text-sm'>
                <div className='justify-center items-center gap-1 hidden md:flex'>
                    <LuPenSquare />
                    <p>Write</p>
                </div>
                <p className='bg-zinc-100 text-black px-4 py-[0.5rem] rounded-full hidden sm:block'>Sign in</p>
                <p className='bg-black text-white px-4 py-[0.5rem] rounded-full'>Sign up</p>
            </div>
        </Navbar>
        </>
  )
}

export default Header
