import {  Box, Button, CardMedia, Grid, Stack } from '@mui/material'
import React from 'react'
import img1 from '../../../images/r1.jpeg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FlareIcon from '@mui/icons-material/Flare';
const Rooms = () => {
    return (
        <>
            <Grid containe
                sx={{ width: { lg: '90%', md: '90%', sm: '97%', xs: '100%' } }}
                alignItems={"center"}
                justifyContent="center"
                textAlign={"center"}
                pt={5}
                mx={"auto"}

            >
                <Grid item md={12} xs={12} >
                    <Stack direction={{xs:"columm", sm:'row'}} justifyContent={"space-between"} textAlign={{xs:'center',sm:'justify'}}>
                        <h1>ROOMS <br></br>& APARTMENTS</h1>
                        <h4 style={{ width: { sm: '300px',xs:'90%' }}}>A landmark building in one of Stockholm's most prestigious locations, just footsteps from the waterfront</h4>
                    </Stack>
                </Grid>
            </Grid>

            <Grid container sx={{ width: { lg: '90%', md: '90%', sm: '97%', xs: '100%' } }} mx={"auto"} justifyContent={"center"} spacing={2}> 
         
                <Grid item md={4} sm={4} xs={12}>
                        <Stack direction={'column'} spacing={12}>  
                            <Box sx={{width:'50%'}} display={{xs:'none',md:'block'}}>
                            <CardMedia
                                sx={{ height: "300px" }}
                                component="img"
                                image={img1}
                                alt="rooms" />
                        </Box>
                        <Stack width={{ xs: "80px", sm: "100px", md: "100px" }} height={{ xs: "80px", sm: "100px", md: "100px" }} sx={{ border: "1px solid gray", borderRadius: "50%", textAlign: "center", fontSize: { xs: "0.8rem", md: "1.3rem" } }} justifyContent={"center"}>
                            <span style={{ color: "black" }}>   <ArrowForwardIcon /></span>

                        </Stack>
                           
                        </Stack>
                    </Grid>

                <Grid item md={4} sm={4} xs={12}>
                    <Stack direction={'column'} spacing={{xs:'0',sm:10}} >
                        <Box>
                            <Button variant="outlined"
                                sx={{
                                    padding: '10px',
                                    border: '1px solid #626c65',
                                    color: 'black',
                                    borderRadius: '20px',
                                    display: { xs: 'none', md: 'block' },
                                    ":hover": {
                                        border: '1px solid #626c65'
                                    },
                                    alignItems: 'center',
                                    fontSize: '20px'
                                }}
                            >
                                <FlareIcon sx={{
                                    color: "#fcd043",
                                    fontSize: '20px'

                                }} />
                                Since 1973
                            </Button>  
                        </Box>
                        <Box>
                            <h1 >Superior Twin</h1>
                            <p  style={{width:"300px"}}>Superior Double or Twin Rooms come with either one double or two single beds. The room size is 23 sqm. They are also equipped with a fully-stocked minibar and snacks, air-conditioning unit</p>   
                        </Box>
                        <p>01/04</p>
                       
                    </Stack>
                       
                    </Grid>
                <Grid item md={4} sm={4} xs={10} order={{ xs:'-1',sm:"0"}}>
                 
                   < div style={{ position: "relative" }}>
                        <CardMedia
                            sx={{ height: "500px"}}
                            component="img"
                            image={img1}
                            alt="rooms" />
                        <div style={{ position: "absolute", color: "white", bottom: 10, right: "10px", transform: "translateX(-50%)", }}> <Stack width={{ xs: "80px", sm: "100px", md: "120px" }} height={{ xs: "80px", sm: "100px", md: "120px" }}
                            sx={{ backgroundColor: "#FCD043", borderRadius: "50%", textAlign: "center", fontSize: { xs: "0.8rem", md: "1.3rem" } }} justifyContent={"center"}>
                            Book Room
                        </Stack></div>
                </div>
                    </Grid>

                </Grid>

            
        </>
    )
}

export default Rooms