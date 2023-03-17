import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import FlareIcon from '@mui/icons-material/Flare';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Slider = () => {
    return (
        <>
            <Box bgcolor={"#1b3b36"}>
            <Grid container
              
                color={'white'}
                sx={{ width: {lg:'90%', md: '90%', sm: '97%', xs: '100%' } }}
                    alignItems={"center"}
                    // justifyContent="center"
                    textAlign={"center"}
                pt={5}
                 mx={"auto"}
                    
            >
                    <Grid item md={6} sm={6} xs={12} textAlign={{ xs: "center",md:'left' }}>
                    <Box >
                        <Typography
                            sx={{
                                fontSize: { xs: '50px',sm:'70px', md: '80px',lg:'110px' }
                            }}>
                            Bank <span style={{
                                color: '#fcd043'
                            }}>
                                Hotel</span>
                        </Typography>
                        <p
                            style={{
                                color: '#fcd043'
                            }}>
                            ROOM//RESTAURANT//CONFRESS HALL//WINE BAR
                        </p>
                    </Box>

                </Grid>
                    <Grid item md={3} sm={6} xs={12} lignItems={"center"} justifyContent={"center"}>
                        <Box sx={{ alignItems: 'center', width: { xs: '100%', md: '100%',lg:'90% ',md:"90%" },mx:'auto'}} >
                            <Button variant="outlined"
                                sx={{
                                    padding: '10px',
                                    border: '1px solid #626c65',
                                    color: 'white',
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
                   
                    <p mt={"10px"}>
                        The Luxuries hotel is the most beautiful European with an exclusive resturents,confress-hal and art-bar
                    </p>




                </Grid>
                <Grid item md={3} sm={3} xs={12} textAlign={"center"} display={{xs:'none',md:'block'} }>

                    <Button variant="outlined"
                        sx={{
                            padding:'10px',
                            border: '1px solid #626c65',
                            color: 'white',
                            borderRadius: '20px',
                            ":hover": {
                                border: '1px solid #626c65'
                            },
                            alignItems: 'center',
                            gap:'5px'
                        }}>
                        <KeyboardArrowDownIcon sx={{
                            color: '#fcd043'
                        }}
                        />
                    </Button>

                </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default Slider