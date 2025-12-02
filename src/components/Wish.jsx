import React from 'react'
import { Typography, Grid2, Button, Box, TextField } from '@mui/material';
import image from "../assets/Avatar.png"
import { RxCross2 } from "react-icons/rx";
import image1 from "../assets/camera.png"
import image2 from "../assets/redchair.png"
import Navbar from './Navbar';
import Footer from './Footer';
import FooterUpper from './FooterUpper';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromWish } from './cartSlice';
import { addToCart } from './cartSlice';
import { useNavigate } from 'react-router-dom';


function Wish() {
    const { wish } = useSelector((state) => state.cart)
   const navigator = useNavigate()






     const dispatch =useDispatch();
    console.log(wish)
    return (
        <>
            <Box sx={{ mx: { xs: 2, md: 20 } }}>
                <Navbar />
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>

                        <Typography variant="body1" sx={{ py: 8, fontSize: { xs: "1.4rem", sm: "2rem", md: "2.6rem" } }} >My Account </Typography>
                    </Box>
                    <Grid2 container spacing={4} sx={{ pb: 12 }}>
                        <Grid2 item size={{ md: 4, lg: 3, xs: 12 }} sx={{ backgroundColor: "#F3F5F7", p: 2 }}>
                            <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                                <img src={image} alt="" className='' />
                                <img src={image1} alt="" className='absolute -bottom-[4%] left-[51%]' />
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <p className="na text-xl font-semibold pt-4">Sofia Havertz</p>
                            </Box>
                            <Box sx={{ pt: 4 }}><Typography variant='body2' sx={{ fontWeight: "600", fontSize: { xs: "0.8rem", md: "1rem" } }}>Account</Typography></Box>
                            <hr className="na " />
                            <Box><Typography variant='body2' sx={{ fontWeight: "600", pt: 3, fontSize: { xs: "0.8rem", md: "1rem" } }}>Address</Typography></Box>
                            <Box><Typography variant='body2' sx={{ fontWeight: "600", pt: 3, fontSize: { xs: "0.8rem", md: "1rem" } }}>Orders</Typography></Box>
                            <Box><Typography variant='body2' sx={{ fontWeight: "600", pt: 3, fontSize: { xs: "0.8rem", md: "1rem" } }}>Wishlist</Typography></Box>
                            <Box><Typography variant='body2' sx={{ fontWeight: "600", pt: 3, pb: 6, fontSize: { xs: "0.8rem", md: "1rem" } }}>Log Out</Typography></Box>
                        </Grid2>




                        <Grid2 item size={{ md: 8, lg: 9, xs: 12 }} sx={{ pl: { xs: 0, lg: 3 } }}>


                            <Typography variant="body" className='font-semibold' sx={{ fontSize: { xs: "1rem", md: "1.4rem" } }}>Your Wishlist</Typography>
                            <Box sx={{ display: "flex", justifyContent: "space-between", p: 4, }}>
                                <Typography variant="body2" sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" } }}>Product</Typography>
                                {/* <Typography variant="body2" sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" },display:{xs:"none",md:"block"} }}>Quantity</Typography> */}
                                <Typography variant="body2" sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" }, display: { xs: "none", md: "block" } }}>Price </Typography>
                                <Typography variant="body2" sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" }, display: { xs: "none", md: "block" } }}>Action</Typography>
                            </Box>

                            <hr className="na opacity-45" />
                            {wish && wish?.map((ele) =>(
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 3 }}>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <RxCross2 className='text-2xl'  onClick={(e)=>{e.stopPropagation(),dispatch(removeFromWish(ele.id))}}/>
                                        <img src={ele.image} alt=""  className='h-20 pr-4'/>
                                        <div className="na">
                                            <p className="na font-bold">{ele.category}</p>
                                            <p className="na text-xs">Color : Black</p>
                                        </div>
                                    </Box>
                                    <p className="na font-semibold">$ {ele.price}</p>

                                    <Box className='text-white bg-[#141718]   rounded-lg' sx={{ px: { xs: "0.5rem", md: "1.2rem" }, fontSize: { xs: "0.6rem", lg: "1rem" }, py: { md: "0.7rem", xs: "0.3rem" } }}  onClick={(e)=>{e.stopPropagation(),navigator("/cart"),dispatch(removeFromWish(ele.id)),dispatch(addToCart(ele))}}>Add to Cart</Box>
                                </Box>
                            ))}



                            <hr className="na opacity-45" />
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 3 }}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <RxCross2 className='text-2xl' />
                                    <img src={image2} alt="" />
                                    <div className="na">
                                        <p className="na font-bold">Tray Table</p>
                                        <p className="na text-xs">Color : Black</p>
                                    </div>
                                </Box>
                                <p className="na font-semibold">$345</p>

                                <Box className='text-white bg-[#141718]   rounded-lg' sx={{ px: { xs: "0.5rem", md: "1.2rem" }, fontSize: { xs: "0.6rem", lg: "1rem" }, py: { md: "0.7rem", xs: "0.3rem" } }}>Add to Cart</Box>
                            </Box>


                            <hr className="na opacity-45" />
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 3 }}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <RxCross2 className='text-2xl' />
                                    <img src={image2} alt="" />
                                    <div className="na">
                                        <p className="na font-bold">Tray Table</p>
                                        <p className="na text-xs">Color : Black</p>
                                    </div>
                                </Box>
                                <p className="na font-semibold">$345</p>

                                <Box className='text-white bg-[#141718]   rounded-lg' sx={{ px: { xs: "0.5rem", md: "1.2rem" }, fontSize: { xs: "0.6rem", lg: "1rem" }, py: { md: "0.7rem", xs: "0.3rem" } }}>Add to Cart</Box>
                            </Box>
                            <hr className="na opacity-45" />
                        </Grid2>
                    </Grid2>

                </Box>
            </Box>
            <FooterUpper />
            <Footer />

        </>
    )
}

export default Wish