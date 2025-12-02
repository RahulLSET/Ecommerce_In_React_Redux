import React from 'react'
import { Typography, Grid2, Button, Box, TextField, Hidden } from '@mui/material';
import { CiMail } from "react-icons/ci";


function FooterUpper() {
    const a = "https://s3-alpha-sig.figma.com/img/2c01/ae8d/ce147d8554c2cda7530244569e9d8515?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iqRRzjt9XKxbN9pa1x3nG4LWXwBdMTU6C0ey5tyKUwXfzQu81xwpPGSFk1tV4MFRUmwzzwGZSdMV6szsjWAygXReFMme~xadKPLWEyrD0NYv~YKDnGIoGs3FLZuFGKTTaJYedt~WNPHAlTiFSrmbvMJ9Uv3sZqiwgAED1oD3qOECT9BEWqNvo5kjl9gE7Rp3mKFpaEcLeyUUFlAMCvXMZ7bR~t2fZWxG7cL5RRH-ZWhJ9jx9EEwpLJepVLYBjEBjAnfoFw~vBZQs2kbz~Yh~QZIzsTiFOx4nqMJ5I5aPhhjOy~EubredC2t7UVZ00I~IZFvk4SbTZI3ck6xwNM~3ow__"
    const b = "https://s3-alpha-sig.figma.com/img/c898/ffe2/c0350fd22c758331418f9169ec926583?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QUlMV2LcopQ0zA5Z6VKX3j7xmi4L7-zAyE12n3UrbZOOUNjE6aJdKs-57egASLP-jhjg32sDkweJTYAH47oicLfY8PKVTq5e4aWLvkZEaevH4z6doVc0Rd3AYza5s9TUP6vkUylrkOczRLDH6H3N57dlK~KJ6C7QgEU8xV210DMGBo8-MPhpCMgpmGJMrAJHNj3Ej7dK4lN85W4ES8qstEp2LN-KnSLZp5NQX8SkNYc3Ufsg~8F1qMxJcH40xd3YgutQ5e~PHfgzFXRF2JdYxB94qCeNBjX-z4GJ0Ehh2Zr~V18ejp39sGL8UB-CuDgFm6L9ZUrzke7sq-I9dqeUlQ__"
    return (
        <>
            <Box>
                <Grid2 container spacing={2} sx={{backgroundColor:"#F1F3F5", position:"relative",overflow:"hidden" }}>
                    <Grid2 item size={{ lg: 4, md: 4,xs:0}} sx={{visibility:{xs:"hidden" ,md:"visible"}}}>
                        <img src={b} alt=""  className='absolute h-100  -left-20 border-2  '/>
                    </Grid2>

                    <Grid2 item size={{ lg: 4, md: 4, xs: 12 }}>
                        <p className="na text-3xl font-semibold text-center pt-16">Join Our Newsletter</p>
                        <p className="na text-center p-2">Sign up for deals, new products and promotions</p>
                        <div className="na flex justify-between m-4 pt-6">

                            <div className="na flex items-center gap-1 text-xl">
                                <CiMail className='mt-1' />
                                <p>Email address</p>
                            </div>
                            <p>Signup</p>
                        </div>
                        <div className="na border-b-1 mb-20"></div>
                    </Grid2>
                    <Grid2 item size={{ lg: 4, md: 0,xs:0 }} sx={{visibility:{xs:"hidden" ,md:"visible"}}}>
                        <img src={a} alt=""  className='absolute h-100  -right-50 border-2 '/>
                    </Grid2>

                </Grid2>
            </Box>
        </>
    )
}

export default FooterUpper