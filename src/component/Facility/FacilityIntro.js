import React from 'react';
import { Grid, Typography } from "@mui/material";
import restaurantimg from "./images/restaurant.jpg";
import restimg2 from "./images/rest2.jpg";
import restimg3 from "./images/rest3.jpg";
import restimg4 from "./images/rest4.webp";

import { Box } from '@mui/system';


function FacilityIntro() {
  return (
    <Grid sx={{ backgroundColor: "#1b3b36" }} >
      <Grid container xl={12} lg={12}   >
        <Grid item mt={5}  >
          <Typography variant='h2' sx={{ padding: "10px", color: "#FCD043", fontFamily: "miracle", fontStyle: "normal", fontSize: { md: "100px", sm: "50px", xs: "50" } }} >
            "Safe" restaurant
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "space-around", height: "200px", width: "100%", alignItems: "center" }} >
        <Grid item xl={6} lg={6}  >
          <Typography variant='h4' sx={{ color: "#FFFCF6", fontFamily: "miracle", fontStyle: "normal", fontWeight: "400", fontSize: "40px", lineHeight: "73px" }} >
            One Of A Kind
          </Typography>
        </Grid>
        <Grid item  lg={3} md={6} >
          <Typography  sx={{ color: "#FFFCF6", opacity: "0.60", fontSize: { xs: "13px",lg:"15px",md:"15px"} }} >
            Bank Hotel proudly welcomes you to the Safe Restaurant, a place where you will wish you could dine every day.
            The restaurant offers a unique menu developed by the team of professionals led by chef Mary-Ann Jones, the
            wine list with more than 250 items, the outstanding service, and the unforgettable atmosphere.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ width: "100%" }} >
        <Grid item sx={{ width: "70%", padding: "20px" }} xs={12} sm={12} md={8} >
          <img style={{ height: "600px", width: "100%" }} src={restaurantimg} alt="" />
        </Grid>
        <Grid item sx={{ width: "30%", padding: "20px", display: { xs: "none", md: "block" } }} xs={12} sm={12} md={4} >
          <img style={{ height: "450px", width: "100%" }} src={restimg2} alt="" />
        </Grid>
      </Grid>
      <Grid container >
        <Grid item lg={4} md={4} sx={{ padding: { lg: "10px", sm: "10px", xs: "5px" } }}  >
          <Typography variant='h4' sx={{ color: "#FFFCF6" }} >
            At your service
          </Typography>
          <Typography sx={{ color: "#FFFCF6", opacity: "0.60" }} >
            The team of the Safe Restaurant aims to exceed all expectations of our guests. Our chef worked hard to develop a unique menu that features the best meals of the
            European cuisine that will match the tastes of the most demanding clients. Friendly and attentive waiters will ensure that you will enjoy your time in our restaurant.
          </Typography>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item lg={6} md={6} sx={{ padding: { lg: "10px", sm: "10px", xs: "5px", md: "7px" } }} >
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <Typography variant='h4' sx={{ color: "#FFFCF6", opacity: "0.80" }} >
            Once you try our cuisine and service, you shall never want to visit another restaurant.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
        <Grid item sx={{ width: "30%", ml: "20px" }} xs={12} sm={12} md={4} >
          <img style={{ height: "500px", width: "95%" }} src={restimg3} alt="" />
        </Grid>
        <Grid item sx={{ width: "60%", mr: "20px", display: { xs: "none", md: "block" } }} xs={12} sm={12} md={6} >
          <img style={{ height: "500px", width: "100%" }} src={restimg4} alt="" />
        </Grid>

      </Grid>


      <Grid container sx={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
        <Grid item sx={{ width: { lg: "30%", xs: "100%" }, ml: "20px" }} md={8} sm={8} xs={8} >
          <Typography sx={{ width: "50%", color: "#FCD043" }} >
            All room decoration was made with ecological certified and safe materials.
          </Typography>
        </Grid >
        <Grid item sx={{ width: "80%", mt: "150px", padding: { lg: "10px", md: "10px", sm: "10px", xs: "5px" } }}>
          <Typography variant='h3' sx={{ width: { xs: "100%", lg: "50%", md: "50%" }, color: "#FFFCF6", fontFamily: "Miracle", fontStyle: "normal" }} >
            Spend Your Time With Us
          </Typography> <br />
          <Typography sx={{ width: { xs: "100%", lg: "50%", md: "50%" }, color: "#FFFCF6", opacity: "0.8" }} >
            If you are looking for an exclusive place to have a romantic dinner, organize a business meeting, or spend an enjoyable evening with friends,
            visit Safe Restaurant in Bank Hotel. With our delicious meals, unique interior design, and atmosphere of comfort and exquisiteness you
            shall never want to go to a different restaurant.
          </Typography>
        </Grid>
      </Grid>
      <br /> <br /> <br /><br />
      <Grid container >
        <Grid item lg={8}>
          <Typography variant='h4'></Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography variant='h4' sx={{ color: "#FFFCF6" }}  >
           <u> +38 032 297 50 20</u>
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Grid item lg={4}>
          <Typography variant='body1' sx={{ color: "#FFFCF6", padding: "20px", width: "200px" }}  >
            8 Lystopadovoho Chynu,Lviv
          </Typography>
        </Grid>
      </Grid>
      {/* <GetInTouch /> */}
      {/* <Footer/> */}
    </Grid>
  )
}

export default FacilityIntro;
