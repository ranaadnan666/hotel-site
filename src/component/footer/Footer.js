import { Grid, Typography, Button } from '@mui/material';
import React from 'react'
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

function Footer() {
   const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      border: "none"
   }));
   return (
      <Grid sx={{ backgroundColor: "white" }} >
         <Grid container sx={{ width: "100%" }} >
            <Grid item lg="3" md={3} sm={3} xs={3} >
               <Typography variant='h1' color="black" sx={{ width: "100%", ml: { lg: "60px", md: "60px", xs: "10px" }, fontFamily: "Miracle", fontSize: { lg: "100px", md: "100px", sm: "30px", xs: "27px" } }} >
                  GET IN
               </Typography>
            </Grid>
            <Grid item lg="5" sx={{ textAlign: "center" }}>
               <Grid sx={{ textAlign: "center", height: { xs: "100px", lg: "200px", md: "200px" }, width: { xs: "100px", lg: "400px", md: "300px" } }} >
                  {/* <img src={touchimg} alt="" style={{width:"100%"}} /> */}
               </Grid>
               <Typography variant='h1' color="#FCD043" sx={{ width: "100%", fontFamily: "Miracle", fontSize: "Regular", mt: "-70px", fontSize: "150px", fontSize: { lg: "150px", md: "100px", sm: "50px", xs: "50px" } }} >
                  TOUCH
               </Typography>
            </Grid>
         </Grid>
         <br />
         <Typography color="black" ml={5}>FIND A ROOM</Typography>
         <br /><br />
         <Grid
            sx={{
               display: {
                  xs: "none", lg: "flex", md: "flex", sm: "flex"
               }
            }} container >
            <Box sx={{ backgroundColor: "#455955", height: "100px", width: "200px", display: "flex", justifyContent: "center", alignItems: "center", color: "#FFFCF6", borderRight: "1px solid white" }} ml={5} >CHECK IN</Box>
            <Box sx={{ backgroundColor: "#455955", height: "100px", width: "200px", display: "flex", justifyContent: "center", alignItems: "center", color: "#FFFCF6" }} >CHECK OUT</Box>
            <Box sx={{ backgroundColor: "#FCD043", height: "100px", width: "200px", display: "flex", justifyContent: "center", alignItems: "center", color: "#1B3B36" }} mb={20} ><b>BOOK ROOM</b></Box>
         </Grid>
         <Grid sx={{ display: { xs: "block", lg: "none", md: "none", sm: "none" } }} container >
            <Button sx={{ backgroundColor: "#FCD043", height: "150px", width: "150px", borderRadius: "100%", ml: "20px" }} >
               <Typography>BOOK ROOM</Typography>
            </Button>
         </Grid>
         <hr />
         <Box sx={{ flexGrow: 1, height: "300px", display: { xs: "none", lg: "flex", md: "flex", sm: "flex" } }}>
            <Grid container sx={{ display: { xs: "none", lg: "flex", md: "flex", sm: "flex" } }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  >
               <Grid item xs={2} sm={4} md={4}  >
                  <Item sx={{ backgroundColor: "#1b3b36", color: "#FFFCF6", textAlign: "center", width: "80%" }} >
                     <Typography>/ABOUT US</Typography> <br />
                     <Typography variant='body2' sx={{ opacity: "0.80" }}>
                        The five-star hotel in a beautiful European city with a modern restaurant, conference-hall, and art-bar.
                     </Typography>
                  </Item>
               </Grid>
               <Grid item xs={2} sm={4} md={4}>
                  <Item sx={{ backgroundColor: "#1b3b36", color: "#FFFCF6", textAlign: "center", width: "80%" }}>
                     <Typography>/NEWS</Typography> <br />
                     <Typography variant='body2' sx={{ opacity: "0.80" }} >
                        Sign up to our newsletter not to miss exclusive offers and information about the upcoming events.
                     </Typography>
                  </Item>
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <Item sx={{ backgroundColor: "#1b3b36", color: "#FFFCF6", textAlign: "center", width: { xs: "100%", sm: "100%", lg: "80%" } }}>
                     <Typography>/SOCIALS</Typography> <br />
                     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={4} >
                           <Item sx={{ backgroundColor: "#1b3b36", color: "#FFFCF6" }} >
                              <Typography variant='body2' sx={{ opacity: "0.80" }}>FACEBOOK</Typography> <br />
                           </Item>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                           <Item sx={{ backgroundColor: "#1b3b36", color: "#FFFCF6" }} >
                              <Typography variant='body2' sx={{ opacity: "0.80" }}>INSTAGRAM</Typography> <br />
                           </Item>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4} >
                           <Item sx={{ backgroundColor: "#1b3b36", color: "#FFFCF6", border: "none" }} >
                              <Typography variant='body2' sx={{ opacity: "0.80" }}>TWITTER</Typography> <br />
                           </Item>
                        </Grid>
                     </Grid>
                  </Item>
               </Grid>
            </Grid>
         </Box>
         {/* mobile view */}
         <Stack sx={{ textAlign: "center", flexGrow: 1, height: "150px", display: { xs: "flex", lg: "none", md: "none", sm: "none" } }}>
            <Typography sx={{ mt: "40px", fontFamily: "Helvetica Neue LT Std", color: "black" }} >©2021 All rights reserved. BankHotel</Typography>
         </Stack>
      </Grid>
   )
}

export default Footer;
