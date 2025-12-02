import React from 'react'
import { Typography, Grid2, Button, Box, TextField } from '@mui/material';
import { TbBrandYoutube } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

function Footer() {
    return (
        <>
            <Box>

                <Grid2 container spacing={2} sx={{ backgroundColor: "black", color: "white", py: "3rem", px: { xs: 2, md: 20 }, fontSize: { xs: "1rem", md: "1.2rem" } }}>
                    <Grid2 item size={{ xs: 12, md: 6, lg: 6 }} sx={{ display: "flex", gap: "3rem" }}  >
                        <Grid2 container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: { md: "left", xs: "center" } }}>

                            <Grid2 item size={{ xs: 12, md: 6, lg: 6 }} sx={{ fontSize: "2rem", textAlign: { md: "right", xs: "center" } }}><p className="na ">3legant</p></Grid2>
                            <Grid2 item size={{ xs: 12, md: 6, lg: 6 }} sx={{ ml: { xs: "4rem", md: "0rem" }, textAlign: { md: "right", xs: "center" } }}><p className="na ml-4 text-sm w-50 items-center m-auto ">Gift & Decoration Store</p></Grid2>



                        </Grid2>
                    </Grid2>
                    <Grid2 item size={{ xs: 12, md: 6, lg: 6 }}>
                        <Grid2 container spacing={2}>

                            <Grid2 item size={{ xs: 12, md: 2, lg: 2 }} sx={{ textAlign: { md: "right", xs: "center" } }}><p className="na">Home</p></Grid2>
                            <Grid2 item size={{ xs: 12, md: 2, lg: 2 }} sx={{ textAlign: { md: "right", xs: "center" } }}><p className="na">Shop</p></Grid2>
                            <Grid2 item size={{ xs: 12, md: 2, lg: 2 }} sx={{ textAlign: { md: "right", xs: "center" } }}><p className="na">Product</p></Grid2>
                            <Grid2 item size={{ xs: 12, md: 2, lg: 2 }} sx={{ textAlign: { md: "right", xs: "center" } }}><p className="na">Blog</p></Grid2>
                            <Grid2 item size={{ xs: 12, md: 2, lg: 2 }} sx={{ textAlign: { md: "right", xs: "center" } }}><p className="na">Contact Us</p></Grid2>


                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={1} sx={{ backgroundColor: "black", color: "white", fontSize: { xs: "1rem", md: "1.2rem" } }} >
                    <Grid2 item size={{ xs: 12, md: 9, lg: 9 }} sx={{ backgroundColor: "black", px: { xs: 2, md: 20 }, color: "white", padding: "1rem" }} order={{ xs: 4, md: 1 }}>


                        <p>Copyright 2023 3legant. All rights reserved</p>
                    </Grid2>

                    <Grid2 order={{ xs: 2, md: 2 }} item size={{ xs: 12, md: 7, lg: 7 }} sx={{ textAlign: { md: "left", xs: "center" } }}><p className="na">Privacy Policy  &nbsp;&nbsp;    Terms of Use</p></Grid2>




                    <Grid2 item size={{ xs: 12, md: 3, lg: 3 }} sx={{ backgroundColor: "black", color: "white", padding: "1rem" }} order={{ xs: 1, md: 3 }}>
                        <Box sx={{ display: "flex", gap: "1rem", justifyContent: { xs: "center", md: "flex-end" } }}>
                            <FaInstagram />
                            <FiFacebook />
                            <TbBrandYoutube />
                        </Box>
                    </Grid2>
                </Grid2>


            </Box >

        </>
    )
}

export default Footer