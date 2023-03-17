import { Divider } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import About from '../../component/home/about/About'
import Appartment from '../../component/home/appartment/Appartment'
import BookFrom from '../../component/home/bookfrom/BookFrom'
import Confress from '../../component/home/confress/Confress'
import Fecility from '../../component/home/fecility/Fecility'
import Gallary from '../../component/home/gallary/Gallary'
import Ice from '../../component/home/iceresturent/Ice'
import Rooms from '../../component/home/rooms/Rooms'
import Slider from '../../component/home/slider/Slider'
import Wine from '../../component/home/winebar/Wine'

const Home = () => {
  return (
    <>
      <Slider/>
      <BookFrom/>
      <About />
      <Rooms />
      <Box  width={"95%"} mx={"auto"} mt={2}>
        <Divider />
      </Box>
      <Fecility />
      <Box width={"95%"} mx={"auto"} mt={2}>
        <Divider />
      </Box>
      <Ice />
      <Box width={"95%"} mx={"auto"} mt={2}>
        <Divider />
      </Box>
      <Confress />
      <Box width={"95%"} mx={"auto"} mt={2}>
        <Divider />
        </Box>
      <Wine />
      <Box width={"95%"} mx={"auto"} mt={2}>
        <Divider />
      </Box>
      <Appartment />
      <Box width={"95%"} mx={"auto"} mt={2}>
        <Divider />
      </Box>
      <Gallary/>
    </>

  )
}

export default Home