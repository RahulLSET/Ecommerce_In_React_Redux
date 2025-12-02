import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import FooterUpper from './components/FooterUpper'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Card from './components/Card'
import { Typography, Grid2, Button, Box, TextField } from '@mui/material';
import SwiperJs from "./components/SwiperJs.jsx"
import image1 from "./assets/Sofaji.png"
import image2 from "./assets/Toaster.png"
import image3 from "./assets/table.png"
import image4 from "./assets/Shownow.png"
import image5 from "./assets/card1.png"
import image6 from "./assets/card2.png"
import image7 from "./assets/card3.png"
import image8 from "./assets/card4.png"
import image9 from "./assets/room.png"
import image10 from "./assets/article.png"
import image11 from "./assets/article2.png"
import image12 from "./assets/article3.png"
import image13 from "./assets/Lamp.png"
import image14 from "./assets/starji.jpg"
import image15 from "./assets/heart.png"
import { BsHeartFill } from "react-icons/bs";
// import { FaRegHeart } from "react-icons/fa";
// import Navbar from './Navbar';
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addToWish,addToCart } from './components/cartSlice.js'
import { fetchItems } from './components/cartSlice.js'
import Detail from './components/Detail.jsx'
import Cart from './components/Cart.jsx'
import Wish from './components/Wish.jsx'
import "./App.css"
import { useNavigate } from 'react-router-dom'

function App() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { list, error, loading,wish } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchItems())
  }, [])
  console.log(list)
  return (

    <>
      <Box sx={{ mx: { xs: 2, md: 20 } }}>
        <Navbar />
        {/* <Wish/> */}
        {/* <Cart /> */}
        <SwiperJs />


        <Box sx={{ py: { xs: 2, md: 7 } }}>
          <Grid2 container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontWeight: 700, fontSize: { xs: "2.3rem", md: "3rem" } }}>
                Simply Unique <span >/</span> <br />
                Simply Better
              </Typography>

            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <Typography variant="body2" sx={{ fontSize: { md: "1rem", lg: "1.2rem", xs: "0.8rem" } }}><span className='font-bold'>3legant</span> is a gift & decorations store based in HCMC Vietnam. Est since 2019</Typography>
            </Grid2>
          </Grid2>
        </Box>


        {/* 2nd section start */}

        <Grid2 container spacing={2}>
          <Grid2 item size={{ xs: 12, md: 6 }} sx={{ backgroundImage: `url(${image1})`, height: { lg: "700px", md: "500px", xs: "500px" }, backgroundRepeat: "no-repeat", border: "2px solid red", position: "relative" }}>
            {/* <img src={image1} alt="" /> */}

            <Box sx={{ p: { xs: "2.8rem", md: "3.2rem" } }}>
              <Typography variant="body2" sx={{ fontWeight: 700, fontSize: { xs: "1.8rem", md: "1.9rem" } }}>Living Room</Typography>
              <img src={image4} alt="" />
            </Box>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Box sx={{ backgroundImage: `url(${image3})`, height: { md: "300px", xs: "350px", lg: "350px" },width:{xs:"20rem"}, backgroundRepeat: "no-repeat" }}>
              <Box sx={{ p: { xs: "2.8rem", md: "2.5rem" } }}>
                <Typography variant="body2" sx={{ pt: 18, fontWeight: 700, fontSize: { xs: "1.8rem", md: "1.9rem" } }}>Living Room</Typography>
                <img src={image4} alt="" />
              </Box>
            </Box>
            <Box sx={{ backgroundImage: `url(${image2})`, height: "360px", backgroundRepeat: "no-repeat" }}>
              <Box sx={{ p: { xs: "2.8rem", md: "2.5rem" } }}>
                <Typography variant="body2" sx={{ pt: 18, fontWeight: 700, fontSize: { xs: "1.8rem", md: "1.9rem" } }}>Living Room</Typography>
                <img src={image4} alt="" style={{ pointer: "cursor" }} />
              </Box>
            </Box>


          </Grid2>
        </Grid2>
        {/* 2nd section end */}
        {/* 2nd section end */}
        <Box className="flex justify-between items-center my-4">
          <Typography variant="body2" sx={{ fontSize: { xs: "2rem", md: "r3em" }, fontWeight: 700 }}>New <br /> Arrivals</Typography>
          <span style={{ display: "flex", borderBottom: "1px solid black", width: "10rem", alignItems: "center", marginRight: "2rem" }}>
            <span   >More Products</span> <FaArrowRight className='ml-4' />
          </span>
        </Box>

        <Box sx={{ display: "flex", gap: 2, overflowX: "auto" }} className="nanana">    {/* //For Whole */}
          {/* card 1 */}
          {list && list.map((ele, ind) => (
            <Box key={ele.id} className="transform  " sx={{ height: "auto", width: "17rem", position: "relative", flexShrink: 0, py: 4 }} onClick={()=>navigator(`/detail/${ele.id}`)}>
              <img src={ele.image} alt="" className='h-70 p-4 ml-6 mt-4 w-59' />
              <div className="na pl-2">
                <button className='text-white bg-[#141718] w-[16rem] p-2 rounded-lg absolute top-[65%]' onClick={(e)=>{e.stopPropagation(),navigator("/cart"),dispatch(addToCart(ele))}}>Add to Cart</button>
                <button className='text-white bg-[#38CB89] font-semibold  py-1 px-3 rounded-lg absolute top-[12%]'>-50%</button>
                <button className='text-black font-semibold hover:bg-red-300 bg-[#F3F5F7]  py-1 px-3 rounded-lg absolute top-[4%]'>NEW</button>
                <img src={image14} alt="" className='mt-15' />
                {/* <img src={image15} alt="" className='absolute top-5 right-4' onClick={(e)=>{e.stopPropagation(),navigator("/wish"),dispatch(addToWish(ele))}} /> */}
                  {!(wish?.some((ele1) => ele1.id === ele.id)) ? <FaRegHeart className='font-bold text-3xl  absolute top-5 right-4 ' onClick={(e) => { dispatch(addToWish(ele)), e.stopPropagation() }} /> : <BsHeartFill className='text-red-700 font-bold text-3xl absolute top-5 right-4' onClick={(e) => {dispatch( removeFromWish(ele.id)), e.stopPropagation() }} />}<p className="na">Wishlist</p>
                <p className="na mt-4 font-semibold text-lg">Loveseat Sofa</p>
                <div className="na mt-2">
                  <span className="na  font-semibold ">$199.00</span>  <span className="na line-through opacity-30 ml-2 mt-4">$199.00</span>
                </div>
              </div>
            </Box>
          ))}
        </Box>
        {/* 2nd section end */}

        {/* detail SEction start here  */}

        {/* <Detail /> */}

        {/* detail SEction end here  */}



        {/* 3rd section start */}
        <Box sx={{ my: { xs: 2, lg: 7 } }}>
          <Grid2 container spacing={2} >
            <Grid2 item size={{ xs: 6, md: 3, lg: 3 }}><img src={image5} alt="" /> </Grid2>
            <Grid2 item size={{ xs: 6, md: 3, lg: 3 }}><img src={image6} alt="" /> </Grid2>
            <Grid2 item size={{ xs: 6, md: 3, lg: 3 }}><img src={image7} alt="" /> </Grid2>
            <Grid2 item size={{ xs: 6, md: 3, lg: 3 }}><img src={image8} alt="" /> </Grid2>
          </Grid2>
        </Box>


        {/* 3rd section end */}
      </Box>
      {/* 4rd section start */}
      <Box >
        <Grid2 container  >
          <Grid2 item size={{ xs: 12, md: 6, lg: 6 }} sx={{ border: "2px solid red" }}><img src={image9} alt="" className='w-full h-[525px]' /> </Grid2>
          <Grid2 item size={{ xs: 12, md: 6, lg: 6 }}>
            <Box sx={{ py: { lg: 15, xs: 5 }, px: { lg: 6, xs: 4 }, backgroundColor: "#F3F5F7" }}>
              <Typography variant="body1" sx={{ color: "#377DFF", fontWeight: "700", }}>SALE UP TO 35% OFF</Typography>
              <Typography variant="body1" sx={{ fontSize: "2.5rem", fontWeight: "600", mt: 3 }}>HUNDREDS of <br /> New lower prices!</Typography>
              <Typography variant="body1" sx={{}}>it's more affordable than ever to give every <br /> room in your a stylish makeover</Typography>
              <Box sx={{ mt: 5 }}>
                <img src={image4} alt="" />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      {/* 4rd section end */}
      {/* 5rd section start */}
      <Box sx={{ mx: { xs: 2, md: 20 } }}>
        <Box className="flex justify-between items-center">
          <Typography variant="body2" sx={{ fontSize: { xs: "2rem", md: "4rem" } }}>Articles</Typography>
          <span style={{ display: "flex", borderBottom: "1px solid black", width: "8rem", alignItems: "center", marginRight: "2rem" }}>
            <span   >More Articles</span> <FaArrowRight className='ml-4' />
          </span>
        </Box>

        <Box>
          <Grid2 container spacing={3}  >
            <Grid2 item size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
              <img src={image10} alt="" />
              <Typography variant='body2' sx={{ fontSize: { xs: "1.4rem", lg: "1.6rem" } }}>7 ways to decor your home</Typography>
              <span style={{ display: "flex", borderBottom: "1px solid black", width: "8rem", alignItems: "center" }}>
                <span className='font-semibold'>Read More</span> <FaArrowRight className='ml-4' />
              </span>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={image11} alt="" />
              <Typography variant='body2' sx={{ fontSize: { xs: "1.4rem", lg: "1.6rem" } }}>7 ways to decor your home</Typography>
              <span style={{ display: "flex", borderBottom: "1px solid black", width: "8rem", alignItems: "center" }}>
                <span className='font-semibold'>Read More</span> <FaArrowRight className='ml-4' />
              </span>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={image12} alt="" />
              <Typography variant='body2' sx={{ fontSize: { xs: "1.4rem", lg: "1.6rem" } }}>7 ways to decor your home</Typography>
              <span style={{ display: "flex", borderBottom: "1px solid black", width: "8rem", alignItems: "center" }}>
                <span className='font-semibold'>Read More</span> <FaArrowRight className='ml-4' />
              </span>
            </Grid2>
          </Grid2>
        </Box>
      </Box>

      {/* 5rd section end */}



      {/* <Signup /> */}
      {/* <Signin /> */}

      <FooterUpper />

      <Footer />
    </>
  )
}

export default App