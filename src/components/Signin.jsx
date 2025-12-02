
import React from 'react'
import { Typography, Grid2, Button, Box, TextField } from '@mui/material';
import image1 from "../assets/Left.png"
import { IoEyeOutline } from "react-icons/io5";
import Navbar from './Navbar';
import Footer from './Footer';
import FooterUpper from './FooterUpper';

function Signin() {
  return (
    <>
    <Navbar/>
      <Box >
                <Grid2 container spacing={2}>
                    <Grid2 item size={{ md: 6, lg: 6, xs: 12 }}>
                        <img src={image1} alt="" className='h-[50rem] w-[100%]' />
                    </Grid2>
                    <Grid2 item size={{ md: 6, lg: 6, xs: 12 }} sx={{my:{xs:5,md:27},px:{xs:5,lg:15}}}>
                        <p className="na text-3xl font-semibold">Sign In</p>
                        <p className="na pt-4">Don't have an account yet? <span className='text-[#72DAAC]'>  &nbsp; Sign Up</span></p>
                        <input type="text" className=' mt-8 pt-2 outline-none  w-[100%]' placeholder='Your username or email address' />
                        <hr className='opacity-10' />
                        <span className='flex py-4 mt-4 justify-between '><input type="password" name="id" id="" placeholder='Password' className='outline-none' /> <IoEyeOutline /></span>
                        <hr className='opacity-10' />

                        <div className="na flex justify-between  mt-8">
                            <div className="na flex  items-center ">
                                <input type="checkbox" name="ya" id="" className='mr-2 w-4 h-4' /> <p>Remember me</p>
                            </div>
                            <span className=''>Forgot password?</span>
                        </div>
                        <button className='text-white bg-[#141718] w-full p-2 rounded-lg mt-12'>Sign In</button>
                    </Grid2>
                </Grid2>
            </Box>
            <FooterUpper/>
            <Footer/>
    </>
  )
}

export default Signin