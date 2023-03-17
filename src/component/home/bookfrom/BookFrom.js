import { Grid, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import img1 from "../../../images/home.jpeg"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const BookFrom = () => {
    return (
        <>
            <Box bgcolor={"#1b3b36"}>
                <Grid container
                    color={'white'}
                    sx={{ width: { md: '95%', sm: '97%', xs: '100%' } }}
                    alignItems={"center"}
                    justifyContent="center"
                    mx={"auto"}
                >
                    <Grid item md={12} xs={12}>
                        <div style={{ position: "relative" }}>
                            <Box >
                                <img src={img1} alt="rooms" style={{ width: '100%', height: '60vh' }} />
                            </Box>

                            <Box display={{xs:'none',sm:'block'}}>
                            <div style={{
                                position: "absolute",
                                color: "white",
                                top: 0,
                                right: "0%",

                            }}
                            >
                                <Stack

                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="flex-start"
                                    spacing={0}
                                >
                                    <Stack
                                        direction={"row"}
                                        sx={{
                                            background: '#979d9a',
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
                                    <Stack
                                        direction={"row"}
                                        sx={{
                                            background: '#979d9a',
                                            padding: '20px',
                                            width: '200px',
                                            alignItems: "center",
                                            justifyContent: 'space-between'
                                        }} >
                                        CHECK Out  <KeyboardArrowDownIcon sx={{
                                            color: '#fcd043'
                                        }} />
                                    </Stack>
                                    <Box sx={{ background: '#fcd043', padding: '20px 30px', color: 'black' }}>
                                        BOOK FROM
                                    </Box>
                                </Stack>


                                </div>
                            </Box>

                            {/* for mobile view */}
                            <Box display={{xs:"block",sm:'none'}}>
                                <div style={{ position: "absolute", color: "white", bottom: 10, right: "10px", transform: "translateX(-50%)", }}> <Stack width={{ xs: "80px", sm: "100px", md: "120px" }} height={{ xs: "80px", sm: "100px", md: "120px" }}
                                    sx={{ backgroundColor: "#FCD043", borderRadius: "50%", textAlign: "center", fontSize: { xs: "0.8rem", md: "1.3rem" } ,color:'black'}} justifyContent={"center"}>
                                    Book Room
                                </Stack></div>
                            </Box>
                        </div>

                    </Grid>
                </Grid>
                <Grid container sx={{ width: { md: '95%', sm: '97%', xs: '100%' } }} mx={"auto"}
                    color={'white'} justifyContent={'center'}>
                    <Grid item md={12} xs={12}
                    >
                        <Stack direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={1}>
                            <Stack direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2} display={{ xs: 'none', sm: 'block' }}>
                                <p>+92 304 123 567</p>
                                <p>See the documentation below</p>
                            </Stack>
                            <p> ART & CONGRESS <br></br>HALL</p>
                        </Stack>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default BookFrom