import { Grid, Button, Box, Divider, Typography, Stack } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import moment from 'moment/moment';
const Index = () => {
    return (
        <>
            <Box sx={{ width: { md: '95%', sm: '95%', xs: '100%' } }}
                alignItems={"center"}
                mx={"auto"}>

                {/* git in touch */}
                <Grid container >
                    <Grid item lg="3" md={3} sm={3} xs={3} >
                        <Typography variant='h1' color="black" sx={{ width: "100%", ml: { lg: "60px", md: "60px", xs: "10px" }, fontFamily: "Miracle", fontSize: { lg: "100px", md: "100px", sm: "30px", xs: "27px" } }} >
                            GET IN
                        </Typography>
                    </Grid>
                    <Grid item lg="5" sx={{ textAlign: "center" }}>
                        <Grid sx={{ textAlign: "center", height: { xs: "100px", lg: "200px", md: "200px" }, width: { xs: "100px", lg: "400px", md: "300px" } }} >
                            {/* <img src={touchimg} alt="" style={{width:"100%"}} /> */}
                        </Grid>
                        <Typography variant='h1' color="#FCD043" sx={{ width: "100%", fontFamily: "Miracle", fontSize: "Regular", mt: "-70px", fontSize: { lg: "150px", md: "100px", sm: "50px", xs: "50px" } }} >
                            TOUCH
                        </Typography>
                    </Grid>
                </Grid>




                {/* find a room */}
                <Grid container mt={2} >
                    <Grid item md={12}>
                        <Box display={{ xs: 'none', sm: 'block' }}>
                            <Typography color="black" mb={1}>FIND A ROOM</Typography>
                            <Stack
                                direction="row"
                                alignItems="flex-start"
                                spacing={0}

                            >
                                <Stack
                                    direction={"row"}
                                    sx={{
                                        border: '1px solid gray',
                                        padding: '20px',
                                        width: '200px',
                                        alignItems: "center",
                                        justifyContent: 'space-between'
                                    }} >
                                    CHECK IN   <KeyboardArrowUpIcon sx={{
                                        color: '#fcd043'
                                    }}
                                    />
                                </Stack>
                                <Stack>
                                    <Divider />
                                </Stack>

                                <Stack
                                    direction={"row"}
                                    sx={{
                                        border: '1px solid gray',
                                        padding: '20px',
                                        width: '200px',
                                        alignItems: "center",
                                        justifyContent: 'space-between'
                                    }} >
                                    CHECK Out  <KeyboardArrowDownIcon sx={{
                                        color: '#fcd043'
                                    }} />
                                </Stack>
                                <Box sx={{ background: "#1b3b36", padding: '20px 30px', color: 'white', border: '1px solid gray', }}>
                                    BOOK FROM
                                </Box>
                            </Stack>
                        </Box>

                        {/* Mobile view */}
                        <Box display={{ xs: "block", sm: 'none' }} ml={2}>
                            <Stack width={{ xs: "80px", sm: "100px", md: "120px" }} height={{ xs: "80px", sm: "100px", md: "120px" }}
                                sx={{ backgroundColor: "#FCD043", borderRadius: "50%", textAlign: "center", fontSize: { xs: "0.8rem", md: "1.3rem" }, color: 'black' }} justifyContent={"center"}>
                                Book Room
                            </Stack>
                        </Box>
                    </Grid>

                </Grid>
                <Box mt={2} mb={2}>
                    <Divider />
                </Box>

                {/* newsletter*/}

                <Grid container spacing={10} mb={2} >
                    <Grid item md={3} sm={4} xs={12} >
                        <Box display={{xs:'none',sm:'block'}}>
                            <h4>/ABOUT US</h4>
                            <p> The five-star hotel in a beautiful European city with a modern restaurant, conference-hall, and art-bar.</p>
                        </Box>
                        <Box textAlign={{ xs: 'center', sm: 'start' }}>©{moment().format(' YYYY')} All rights reserved. BankHotel</Box>
                    </Grid>
                    <Grid item md={3} sm={4} xs={12} display={{ xs: 'none', sm: 'block' }} >
                        <h4>/NEWS</h4>
                        <p>Sign up to our newsletter not to miss exclusive offers and information about the upcoming events.</p>
                        <Button variant="outlined" endIcon={<EastIcon />}>
                            Email
                        </Button>
                    </Grid>
                    <Grid item md={3} sm={4} xs={12} display={{ xs: 'none', sm: 'block' }} >
                        <h4>/SOCIALS</h4>
                        <Stack direction={"row"} spacing={5} alignItems={'center'}>
                            <p>FACEBOOK</p>
                            <p> INSTAGRAM</p>
                            <p> TWITTER</p>

                        </Stack>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

export default Index