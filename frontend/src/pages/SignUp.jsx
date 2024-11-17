import React, { useState,  } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Alert, Spinner } from 'flowbite-react';
import {useNavigate} from 'react-router-dom'


const SignUp = () => {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const navigate = useNavigate()

const handleChange = (e)=>{
  setFormData({...formData, [e.target.name]: e.target.value.trim()})
  console.log(formData);
}

const handleSubmit = async (e)=>{
e.preventDefault()
if(!formData.username || !formData.email || !formData.password){
  return setErrorMessage("Please fill out all fields")
}
try {
  setLoading(true)
  setErrorMessage(null)
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(formData)
  })
  const data = await res.json()
  if(data.succuss === false){
    return setErrorMessage(data.message)
  }
  setLoading(false)
  navigate("/sign-in")
} catch (error) {
  setErrorMessage(error.message)
  setLoading(false)
}
}

  return (
<>
<div className='main flex justify-center items-center h-[calc(100vh-4rem)]'>
<div className='signupcard shadow-[4px_4px_10px_rgba(0,0,0,0.2),-2px_-2px_5px_rgba(255,255,255,0.8)] px-8 py-8 rounded-lg w-[60%] lg:w-[30%] md:w-[60%]'>
  <form onSubmit={handleSubmit}>
  <div className='flex flex-col gap-4'>
  <div className='flex flex-col gap-2'>
    <label>Username</label>
    <input className='bg-transparent border-[0.5px] border-zinc-300 rounded-lg focus:border-zinc-700 placeholder:text-zinc-500 outline-none' type="text" name='username' onChange={handleChange}/>
  </div>
  <div className='flex flex-col gap-2'>
    <label>Email</label>
    <input className='bg-transparent border-[0.5px] border-zinc-300 rounded-lg focus:border-zinc-700 placeholder:text-zinc-500 outline-none' type="email" name='email' onChange={handleChange}/>
  </div>
  <div className='flex flex-col gap-2'>
    <label>Password</label>
    <input className='bg-transparent border-[0.5px] border-zinc-300 rounded-lg focus:border-zinc-700 placeholder:text-zinc-500 outline-none' type="text" name='password' onChange={handleChange}/>
  </div>
  <button className='bg-black hover:bg-zinc-700  text-white w-full rounded-lg m-auto py-2' disabled={loading}>
    {
      loading ? (
        <>
        <Spinner size='sm' />
        <span className='pl-2'>Loading</span>
        </>
      ) : "Register"
    }
  </button>
  {errorMessage && 
  (<Alert className='mt-2'>
    {errorMessage}
    </Alert>)
    }
  <div className='flex justify-center items-center flex-col gap-6 mt-4'>
    <p className='text-zinc-500'>Or continue with</p>
  <div className='flex w-full gap-[10%]'>
    <button className=' hover:bg-zinc-100 flex items-center justify-center gap-2 bg-tranparent border-[0.5px] border-zinc-300 text-black w-[45%] rounded-lg m-auto py-2'>
    <FcGoogle />
    <p>Google</p>
    </button>
    <button className=' hover:bg-zinc-100 flex items-center justify-center gap-2 bg-transparent border-[0.5px] border-zinc-300 text-black w-[45%] rounded-lg m-auto py-2'>
    <FaGithub />
    <p>Github</p>
    </button>
  </div>
  </div>
  </div>
  </form>
</div>
</div>
</>
  )
}

export default SignUp
