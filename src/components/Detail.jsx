import React, { useEffect } from 'react'
import { Typography, Grid2, Button, Box, TextField } from '@mui/material';
import image1 from "../assets/bigchair.png"
import image2 from "../assets/detail1.png"
import image3 from "../assets/detail2.png"
import image4 from "../assets/detail3.png"
import image5 from "../assets/redchair.png"
import image6 from "../assets/starji.jpg"
import { FaAngleRight } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
import { BsHeartFill } from "react-icons/bs";
// import { FaRegHeart } from "react-icons/fa";
import Navbar from './Navbar';
import { FaRegHeart } from "react-icons/fa";
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItem } from './cartSlice';
import { increase,decrease,addToCart,addToWish,removeFromWish } from './cartSlice';
import { useNavigate } from 'react-router-dom';

import FooterUpper from './FooterUpper';

function Detail() {
    const { id } = useParams()
    const navigator = useNavigate();
    // console.og({ id })
    const { detail, error1, loading1 ,count,wish} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    
    
    useEffect(() => {
        if (id) {
            dispatch(fetchItem(id))
        }
    }, [id])
    // console.log(detail)
    return (
        <>
            <Navbar />
            <Box>
                <Grid2 container spacing={2}>
                    <Grid2 item size={{ xs: 12, md: 6, lg: 6 }}>
                        <img src={detail.image} alt="" className='p-4 h-150' />
                        <Box sx={{ display: { md: "flex", sm: "none" }, gap: 3, }} >

                            <img src={detail.image} alt="" className='h-40 p-4' />
                            <img src={detail.image} alt="" className='h-40 p-4' />
                            <img src={detail.image} alt="" className='h-40 p-4' />

                        </Box>
                    </Grid2>
                    <Grid2 item size={{ xs: 12, md: 6, lg: 6 }}>
                        <div className="na flex  flex-s"> <img src={image6} alt="" /> <p className="na ml-2">{detail?.rating?.count} Reviews</p></div>
                        <Typography variant="body2" sx={{ fontSize: { md: "2.2rem", xs: "2rem" }, fontWeight: "700" }}>{(detail.category)?.toUpperCase()}</Typography>
                        <p className="na">{detail.description}</p>
                        <div className="na mt-2">
                            <span className="na  font-semibold text-xl ">$ {detail.price}</span>  <span className="na line-through opacity-30 ml-4 mt-4">$199.00</span>
                            <hr className='opacity-10' />
                            <p className="na">Offer expires in: </p>
                            <div className="na flex gap-3 my-4">
                                <div className="na bg-[#F3F5F7] h-10 w-12 justify-center flex items-center flex-col pt-7">
                                    <p className="na font-semibold text-2xl">02</p>
                                    <p className='mt-2 font-light text-xs'>Days</p>
                                </div>
                                <div className="na bg-[#F3F5F7] h-10 w-12 justify-center flex items-center flex-col pt-7">
                                    <p className="na font-semibold text-2xl">12</p>
                                    <p className='mt-2 font-light text-xs'>Hours</p>
                                </div>
                                <div className="na bg-[#F3F5F7] h-10 w-12 justify-center flex items-center flex-col pt-7">
                                    <p className="na font-semibold text-2xl">45</p>
                                    <p className='mt-2 font-light text-xs'>Minutes</p>
                                </div>
                                <div className="na bg-[#F3F5F7] h-10 w-12 justify-center flex items-center flex-col pt-7">
                                    <p className="na font-semibold text-2xl">05</p>
                                    <p className='mt-2 font-light text-xs'>Seconds</p>
                                </div>
                            </div>

                        </div>
                        <hr className='opacity-10  mt-8' />
                        <p className="na">Measurements</p>
                        <p className="na">17 1/2 x 20 5/8 "</p>
                        <div className="na flex items-center gap-1.5">
                            <p className="na">Choose Color </p> <FaAngleRight className='mt-1 text-xl' />
                        </div>
                        <div className="na flex gap-2 mt-4">
                            <div className="na">
                                <p className="na ">Black</p>
                                <img src={image5} alt="" className='border-2 border-white   hover:border-2 hover:border-black' />
                            </div>
                            <div className="na">
                                <p className="na">Black</p>
                                <img src={image5} alt="" className='border-2 border-white   hover:border-2 hover:border-black' />
                            </div>
                            <div className="na">
                                <p className="na">Black</p>
                                <img src={image5} alt="" className='border-2 border-white   hover:border-2 hover:border-black' />
                            </div>
                            <div className="na">
                                <p className="na">Black</p>
                                <img src={image5} alt="" className='border-2 border-white   hover:border-2 hover:border-black' />
                            </div>
                        </div>
                        <div className="na flex  gap-6">
                            <div className="na flex">
                                <button className="na bg-[#F3F5F7] h-12 w-10 rounded-l-lg text-3xl flex items-center justify-center pb-2" onClick={()=> dispatch(decrease())}>-</button>
                                <p className="na text-2xl bg-[#F3F5F7] px-2 pt-2">{count}</p>
                                <button className=" na bg-[#F3F5F7] h-12 w-10 rounded-r-lg text-2xl flex items-center justify-center pb-1" onClick={ ()=> dispatch(increase())}>+</button>
                            </div>
                            <div className="na border-2 flex-1 rounded-xl">
                                <div className="na flex justify-center items-center gap-2 text-xl p-2 font-semibold">
                                {!(wish?.some((ele) => ele.id === detail.id)) ? <FaRegHeart className='font-bold text-3xl  ' onClick={(e) => { dispatch(addToWish(detail)), e.stopPropagation() }} /> : <BsHeartFill className='text-red-700 font-bold text-3xl ' onClick={(e) => {dispatch( removeFromWish(detail.id)), e.stopPropagation() }} />}<p className="na">Wishlist</p>

                                </div>
                            </div>
                        </div>

                        <button className='text-white bg-[#141718] w-full p-2 rounded-lg mt-12' onClick={()=>{navigator("/cart"),dispatch(addToCart({ ...detail , qty:count }))}} >Add to Cart</button>
                        <div className="na my-6">
                            <div className="na  text-xl"><span className=' font-light'>SKU</span> <span className=' font-semibold mx-35'>1117</span> </div>
                            <div className="na  text-xl"><span className=' font-light'>CATEGORY</span> <span className=' font-semibold mx-20'>Living Room, Bedroom</span> </div>
                        </div>
                    </Grid2>
                </Grid2>
            </Box>
            <FooterUpper />
            <Footer />
        </>
    )
}

export default Detail