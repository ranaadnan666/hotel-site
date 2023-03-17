import { CardMedia, Grid } from '@mui/material'
import React from 'react'
import img1 from '../../../images/homeappartment.jpeg'
const  Appartment = () => {
  return (
      <>
          <Grid container justifyContent={"center"} sx={{ width: { md: '95%', sm: '97%', xs: '100%' } }} mx={'auto'}>
              <Grid item md={12} sm={12} xs={12}>
                  <div style={{ position: "relative" }}>
                      <CardMedia
                          sx={{ height: "600px" }}
                          component="img"
                          image={img1}
                          alt="rooms" />
                      <div style={{
                          position: "absolute",
                          color: "white",
                          top: 10,
                          left: "2%",
                     
                      }}>
                          <h1 style={{
                              color: '#fcd043',
                              fontSize: '30px',
                              fontWeight: '700',
                       }}>Best <br></br>Appartment</h1>
                           
                         
                      </div>
                      <div style={{
                          position: "absolute",
                          color: "white",
                          top: "50%",
                          left: "2%",
                      
                      }}>
                          <p style={{
                              fontWeight:'700',
                              color: '#fcd043',
                              width: '200px',
                              textTransform: 'uppercase',
                              textAlign:'justify'

                          }}>An apartment can be one small room or several. An apartment is a flat — it's usually a few rooms that you rent in a building.</p>


                      </div>
                  </div>
              </Grid>
              
          </Grid>
      </>
  )
}

export default Appartment