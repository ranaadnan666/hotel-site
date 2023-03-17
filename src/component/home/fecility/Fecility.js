import { CardMedia, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react';
import img1 from '../../../images/f1.png'
import FlareIcon from '@mui/icons-material/Flare';

const Fecility = () => {
  return (
      <>
          <Grid container pt={5} justifyContent={"center"} sx={{ width: { md: '95%', sm: '95%', xs: '100%' } }} mx={"auto"}>
              <Grid item md={4} sm={4} xs={12}>
                  <h3>ART &<br></br>CONGRESS HALL</h3>
              </Grid>
              <Grid item md={4} sm={4} xs={12} >
                  <Typography
                      sx={{
                          fontSize: { xs: '50px', sm: '70px', md: '100px' }
                      }}>
                      OUR
                  </Typography>
                  <Typography 
                      sx={{
                          fontSize: { xs: '50px', sm: '70px', md: '100px' },
                          marginTop:'-50px'
                      }}>
                      FACI
                  </Typography>
                  <Typography
                      sx={{
                          fontSize: { xs: '50px', sm: '70px', md: '100px' },
                          marginTop: '-50px',
                          alignItems: 'center',
                      }}>
                      <FlareIcon sx={{
                          color: "#fcd043",
                          fontSize: '70px'

                      }} />    LITIES
                  </Typography>
                  {/* <h1 >OUR <br></br>fACI<br></br>LTIES</h1> */}
              </Grid>
              <Grid item md={3} sm={4} xs={12} >
                  <CardMedia
                      sx={{ height: "200px" }}
                      component="img"
                      image={img1}
                      alt="rooms" />
              </Grid>
          </Grid>


          <Grid container pt={5} justifyContent={"center"} sx={{ width: { md: '95%', sm: '95%', xs: '100%' } }} mx={"auto"}>
              <Grid item md={12} sm={12} xs={12} >
                  <Stack direction={{xs:'column-reverse',sm:'row'}} spacing={5} alignItems={"center"}>
                      <CardMedia
                          sx={{ height: "250px", width: '300px' }}
                          component="img"
                          image={img1}
                          alt="rooms" />
                      <p style={{width:'200px'}} >A hotel with a history invites you to the   SAFE restaurant  , in which the unique atmosphere of the hotel is complemented by:</p>
                  </Stack>
              </Grid>
              </Grid>
         
      </>
  )
}

export default Fecility