import React,{useState} from 'react'
import { Typography, Grid2, Button, Box, TextField } from '@mui/material';
import image from "../assets/redchair.png"
import { RxCross2 } from "react-icons/rx";
import { RiCouponLine } from "react-icons/ri";
import Navbar from './Navbar';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart , removeFromCart} from './cartSlice';
import Modal from "./Modal"

import FooterUpper from './FooterUpper';
function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useSelector((state) => state.cart)
     const dispatch =useDispatch()
    console.log(cart)
    return (
        <>
              <Box sx={{ mx: { xs: 2, md: 20 } }}>
            <Navbar />
            <Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>

                    <Typography variant="body1" sx={{ fontSize: { xs: "1.4rem", sm: "2rem", md: "2.6rem" } }} >Cart</Typography>
                </Box>



                <Box sx={{ display: "flex", justifyContent: "center", px: 2, py: 4, overflowX: "auto" }}>
                    <Box sx={{ display: "flex", alignItems: "center", pl: 10 }} className="hover:border-b-2 w-55 py-4">
                        <Box><div className="na bg-black w-8 h-8 mr-2 text-white rounded-[50%] flex items-center justify-center"><Typography className='text-sm font-semibold' >2</Typography></div></Box>
                        <Typography sx={{ fontSize: { xs: "0.7rem" } }} className="na w-20 ">Shopping cart</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mx: 2 }} className="hover:border-b-2 w-55  text-[#B1B5C3] hover:text-black py-4">
                        <Box><div className="na  w-8 h-8 mr-2 text-white bg-[#B1B5C3] hover:bg-black rounded-[50%] flex items-center justify-center"><p className='text-sm font-semibold'>2</p></div></Box>
                        <Typography sx={{ fontSize: { xs: "0.7rem" } }} className="na w-20">Shopping cart</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }} className="hover:border-b-2 w-55">
                        <Box><div className="na bg-black w-8 h-8 mr-2 text-white rounded-[50%] flex items-center justify-center"><p className='text-sm font-semibold'>2</p></div></Box>
                        <Typography sx={{ fontSize: { xs: "0.7rem" } }} className="na w-18">Shopping cart</Typography>
                    </Box>
                </Box>

                <Grid2 container spacing={2}>
                    <Grid2 item size={{ md: 7, xs: 12, lg: 8 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", p: 4, borderBottom: "2px solid black" }}>
                            <Typography variant="body2" sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" } }}>Product</Typography>
                            <Typography variant="body2" sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" }, pl: 12, display: { xs: "none", md: "block" } }}>Quantity</Typography>
                            <Typography variant="body2" sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" }, display: { xs: "none", md: "block" } }}>Price </Typography>
                            <Typography variant="body2" sx={{ fontSize: { xs: "0.9rem", md: "1.2rem" }, display: { xs: "none", md: "block" } }}>Subtotal</Typography>
                        </Box>

                        {cart && cart.map((ele) => (
                            <Box key={ele.id} className="py-4">
                                <Box  sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between" }}>

                                    <Box className="flex gap-2">
                                        <img src={ele.image} alt="" className='bg-[#F3F5F7] h-22 w-22 ' />
                                        <Box sx={{}}>
                                            <p className="na text-lg font-semibold">{ele.category}</p>
                                            <p className="na text-xs p-1">Color: Black</p>
                                            <div className="na flex items-center gap-2" onClick={(e)=>{e.stopPropagation();setIsOpen(true)}}>
                                            {isOpen && <Modal open={isOpen} setOpen={setIsOpen} id={ele.id}/> }
                                            {console.log(ele.id)}
                                                
                                                <RxCross2 className='text-2xl' /><Typography className="na font-semibold " sx={{ display: { xs: "none", md: "block" } }} >Remove</Typography>
                                            </div>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", border: "1px solid black" }}>
                                        <p className="na py-1 px-2 ">-</p>
                                        <p className="na p-1"> {ele.qty??1}</p>
                                        <p className="na py-1 px-2"> +</p>
                                    </Box>
                                    <Box>
                                        <p className="na font-bold pr-2">$ {ele.price}</p>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" ></Typography>
                                    </Box>
                                </Box>
                            </Box>))}
                    </Grid2>





                    <Grid2 item size={{ md: 5, xs: 12, lg: 4 }} className="border-2">
                        <div className="na p-4">
                            <p className="na">Cart summary</p>
                            <div className="na flex justify-between border-2 bg-[#F3F5F7] px-2 py-1 rounded-md my-3">
                                <div className="na flex gap-2">
                                    <input type="radio" name="ra" id="" /> <p className="na">Free shipping</p>
                                </div>
                                <p className="na">$0.00</p>
                            </div>
                            <div className="na flex justify-between border-2 bg-[#F3F5F7] px-2 py-1 rounded-md my-3">
                                <div className="na flex gap-2">
                                    <input type="radio" name="ra" id="" /> <p className="na">Free shipping</p>
                                </div>
                                <p className="na">$0.00</p>
                            </div>
                            <div className="na flex justify-between border-2 bg-[#F3F5F7] px-2 py-1 rounded-md my-3">
                                <div className="na flex gap-2">
                                    <input type="radio" name="ra" id="" /> <p className="na">Free shipping</p>
                                </div>
                                <p className="na">$0.00</p>
                            </div>
                            <div className="na flex justify-between  my-4">
                                <div className="na flex gap-2">
                                    <p className="na">Subtotal</p>
                                </div>
                                <p className="na">$1234.00</p>
                            </div>
                            <hr className='opacity-30' />
                            <div className="na flex justify-between  mt-4">
                                <div className="na flex gap-2">
                                    <p className="na font-semibold">Total</p>
                                </div>
                                <p className="na font-semibold">$1234.00</p>
                            </div>
                            <button className='text-white bg-[#141718] w-full p-2 rounded-lg mt-6'>Add to Cart</button>
                        </div>
                    </Grid2>
                </Grid2>

                <p className="na">Have a coupon?</p>
                <p className="na">Add your code for an instant cart discount.</p>
                <div className="na flex justify-between border-2 bg-[#F3F5F7] px-2 py-1 rounded-sm sm:w-1/2 my-3">
                    <div className="na flex gap-2 items-center">
                        <RiCouponLine className='text-xl mr-2' /><input type="text" name="" id="" placeholder='Coupon Code' />
                    </div>
                    <p className="na">Apply</p>
                </div>

            </Box>
            </Box>
            <FooterUpper />
            <Footer />
        </>
    )
}

export default Cart