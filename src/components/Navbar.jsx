import React from 'react'
import { Typography, Grid2, Button, Box, TextField } from '@mui/material';
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() { 
    const navigator = useNavigate()
    const {cart}=useSelector((state)=>state.cart)
    
    return (
        <>

                <Box sx={{ paddingBlock: "1.3rem", fontSize: { xs: "1rem", md: "1.6rem" } }} >


                    <Grid2 container spacing={8} sx={{ display: "flex", fontSize: { xs: "1rem", md: "6rem" } }} >
                        <Grid2 item   size={{ md: 3, lg: 3, xs: 12 }} sx={{ display: "flex", justifyContent: { md: "flex-start", xs: "center" } }}>
                           <Link to="/" ><Typography className=' ' sx={{ fontSize: "2rem", fontWeight: "600" }} >Kavya Sree Is here..😎</Typography></Link>
                        </Grid2>
                        <Grid2 item size={{ md: 6, lg: 6, xs: 12 }} sx={{}}>
                            <Box sx={{ fontSize: "2rem", display: "flex", justifyContent: "space-around", alignItems: "center", py: 1.2 }}>
                                <Typography variant='body2' sx={{ fontSize: "1.2rem" }} onClick={()=>navigator("/")}>Home</Typography>
                                <Typography variant='body2' sx={{ fontSize: "1.2rem" }} onClick={()=>navigator("/wish")}>Shop</Typography>
                                <Typography variant='body2' sx={{ fontSize: "1.2rem" }}>Product</Typography>
                                <Typography variant='body2' sx={{ fontSize: "1.2rem" }} onClick={()=>navigator("/signin")}>Contact Kavya Okay..😎 </Typography>

                            </Box>
                        </Grid2>
                        <Grid2 item size={{ md: 3, lg: 3, xs: 12 }}>
                            <Box sx={{ display: "flex", gap: "1rem", fontSize: "1.5rem", display: "flex", alignItems: "center", py: 1.2, justifyContent: { xs: "center", md: "flex-end" } }}>
                                <FiSearch />
                                <CgProfile  onClick={()=>navigator("/signup")} />
                                <FiShoppingBag  onClick={()=>navigator("/cart")}/>
                                <div className="na bg-black w-5 h-5 mr-2 text-white rounded-[50%] flex items-center justify-center"><p className='text-sm font-semibold'>{cart.length}</p></div>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Box>
        
        </>
    )
}

export default Navbar