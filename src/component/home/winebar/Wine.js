import { CardMedia, Grid, Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import img1 from "../../../images/wine1.jpg"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Wine = () => {
  return (
      <>
          <Grid container justifyContent={"center"} mt={4} alignItems={"center"}
              sx={{ width: { md: '95%', sm: '97%', xs: '98%' } }}
              mx="auto">
              <Grid item md={4} sm={4} xs={12} >
                  <Box width={{ xs: '50%', sm: '100%' }} margin={'auto'}>
                      <CardMedia
                          sx={{ height: "200px ", width: '200px' }}
                          component="img"
                          image={img1}
                          alt="rooms" />

                  </Box>
              </Grid>
              <Grid item md={4} sm={4} xs={10} order={{ xs: '-1', sm: '0' }} >
                  <Stack direction={{ xs: "row-reverse", sm: 'row' }} spacing={5} alignItems={"center"}  >
                      <p>03</p>
                      <h2>Wine Bar "Reserve"</h2>
                  </Stack>
              </Grid>
              <Grid item md={4} sm={4} xs={12} display={{ xs: 'none', sm: 'block' }} >
                  <TrendingFlatIcon sx={{ fontSize: "50px", width: '100%' }} />
              </Grid>
          </Grid>
    
      </>
  )
}

export default Wine