import * as React from 'react';
import { Grid, Box, CardMedia } from '@mui/material';
import itemData from './Data';
const  Gallary = () => {
  return (
      <>
          <Box bgcolor={"#1b3b36"} pt={3}>    
              <h1 style={{ textAlign: 'center', color:'#fcd043' }}>Our Gallary</h1>
              <Grid container justifyContent={"center"} sx={{ width: { md: '95%', sm: '97%', xs: '100%' } }} mx={"auto"} spacing={2}>
                  {itemData.map((item) => {
                  return (


                      <Grid item lg={2} xl={2} md={2} sm={6} xs={6}>

                          <CardMedia
                              component="img"
                              height="194"
                              image={item.ImageURL}
                              alt={item.title}
                          />

                      </Grid>
                  );
              })}
              </Grid>
          </Box>
      </>
  )
}

export default Gallary

