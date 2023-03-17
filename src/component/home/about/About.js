import { Grid, Typography, Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import img1 from '../../../images/about.jpeg'
const About = () => {
  return (
      <>
          <Box bgcolor={"#1b3b36"} pb={5}>
              <Grid container
                  color={'white'}
                  sx={{ width: { md: '95%', sm: '95%', xs: '100%' } }}
                  alignItems={"center"}
                  mx={"auto"}
                  pt={6}
                  spacing={2}
              >
    
                  <Grid item md={5} xs={12} sm={3}  >
                      <Box sx={{width:{xs:'100%',sm:"70%"},height:{xs:'70vh',sm:'50vh'}}} overflow={'hidden'}>
                          <img src={img1} alt="img" width={"100%"} height={"auto"}  /> 
                      </Box>
                    
              </Grid>
              <Grid item md={3} xs={12} sm={6}>
                      <Stack>
                          <Stack textAlign={{xs:'center',sm:'left'}}>
                              <Typography
                                  sx={{
                                      color: '#fcd043',
                                      fontSize: { xs: '50px', sm: '70px', md: '90px',lg:'100px' }
                                  }}>
                                  About <br>
                                  </br>
                              </Typography>
                              <Stack  justifyContent="flex-end">
                                  <Box sx={{ marginTop: { md:'-70px', sm: '-50px',xs:'-10px' } }}>
                                      <Typography sx={{
                                          color: '#fcd043',
                                          fontSize: { xs: '50px', sm: '70px', md: '90px', lg: '100px' }
                                      }}>Us</Typography>
                                  </Box>

                              </Stack>
                             
                          </Stack>
                          
                          <Stack sx={{ textAlign:{ xs:"center",md:'start'} }}>
                          <h1>High Quelity</h1>
                              <Typography sx={{ width: { xs: '50%',md:"100%" },textAlign:'justify'}} mx={"auto"}>
                                  Step through an arch of fragrant blooms to discover this enchanting boutique townhouse in the very heart of Knightsbridge, in the Royal Borough of Kensington and Chelsea.
                          </Typography>
                      </Stack>
                          
             </Stack>
              
               

              </Grid>
              <Grid item md={4} sm={3}  display={{xs:'none',sm:"block"}}>
                  <img src={img1} alt="img" style={{ width: '100%', height: '50vh' }} />

              </Grid>
    
              </Grid>
              </Box>
      </>
  )
}

export default About