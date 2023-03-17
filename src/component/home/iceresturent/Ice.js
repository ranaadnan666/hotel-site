import { Box, CardMedia, Grid, Stack } from '@mui/material'
import React from 'react'
import SouthIcon from '@mui/icons-material/South';
import img1 from '../../../images/r1.jpeg'
const Ice = () => {
    return (
        <>
            <Grid container sx={{ width: { md: '95%', sm: '95%', xs: '100%' } }} mx={"auto"} mt={10} alignItems={"center"} >
                <Grid item md={4}  sm={4} xs={6}>
                    <Stack width={{ xs: "80px", sm: "100px", md: "100px" }} height={{ xs: "80px", sm: "100px", md: "100px" }} sx={{border:"1px solid gray" , borderRadius: "50%", textAlign: "center", fontSize: { xs: "0.8rem", md: "1.3rem" } }} justifyContent={"center"}>
                        <span style={{color:"black"}}> <SouthIcon /></span>
                       
                    </Stack>
                </Grid>
                <Grid item md={4} sm={4} xs={6}>
                    <Stack direction={"column"} spacing={5} alignItems={"center"}>
                        <p>01</p>
                        <Box>
                            <Stack > 
                                <h1>Ice Resturent</h1>
                                <h6 style={{ width: { xs: '90%', sm: '40%' }}}>Superior Double or Twin Rooms come with either one double or two single beds. The room size is 23 sqm. They are also equipped with a fully-stocked minibar and snacks, air-conditioning unit</h6>  
                            </Stack>
                        </Box>
                   </Stack>
                </Grid>
                <Grid item md={4} sm={12} xs={12} display={{xs:'none',sm:"block"}}>
                    <CardMedia
                        sx={{ height: "500px" }}
                        component="img"
                        image={img1}
                        alt="rooms" />

                </Grid>

            </Grid>
        </>
    )
}

export default Ice