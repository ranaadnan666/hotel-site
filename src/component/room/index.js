import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import img from "../../images/bed2.jpg";
import image2 from "../../images/room2.jpg";
import image3 from "../../images/room3.jpg";
import { Button, Divider, Typography } from "@mui/material";
import FlareIcon from "@mui/icons-material/Flare";

const MainRoom = () => {
  return (
    <Grid>
      <Stack className="room-image" sx={{ height: { xs: "45vh", md: "70vh" } }}>
        {/* <img className='room-image' src={img} alt="image"/> */}

        <Typography
          sx={{
            color: "#1b3b36",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            fontWeight: "700",
            padding: "1rem",
            mt: "20px",
          }}
        >
          Superior Twin
        </Typography>

        <Stack
          direction={"row"}
          justifyContent={{ xs: "flex-end", md: "space-between" }}
          sx={{ marginTop: { xs: "150px", lg: "250px" }, padding: "0 1rem" }}
        >
          <Typography
            sx={{
              color: "black",
              width: "30%",
              fontSize: "1.4rem",
              fontWeight: "600",
              display: { xs: "none", md: "block" },
            }}
          >
            All ROOM DECORATION WAS MADE WITH ECOLOGICAL CETIFIED AND SAFE
            MATERIALS{" "}
          </Typography>
          <Stack
            width={{ xs: "80px", sm: "100px", md: "150px" }}
            height={{ xs: "80px", sm: "100px", md: "150px" }}
            sx={{
              backgroundColor: "#FCD043",
              borderRadius: "50%",
              textAlign: "center",
              fontSize: { xs: "0.8rem", md: "1.3rem" },
            }}
            justifyContent={"center"}
          >
            Book room
          </Stack>
        </Stack>
      </Stack>
      <Grid sx={{ backgroundColor: "#1b3b36" }} width="100%">
        <Stack
          direction={"column"}
          width={{ xs: "68%", md: "80%" }}
          mx={"auto"}
          p={{xs:"8px",md:"50px"}}
        >
          <Button
            sx={{ width: "150px", color: "white" }}
            variant="outlined"
            startIcon={<FlareIcon />}
          >
            since 1973
          </Button>
          <Stack
            direction={{ xs: "column", md: "row" }}
            p={"2rem 0"}
            justifyContent="space-between"
            columnGap={2}
            rowGap={4}
            
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "1.5rem", md: "2rem" },
                width: { xs: "100%", md: "40%" },
              }}
            >
              All suits have a unique design becouse we want out every guest to
              feel special
            </Typography>
            <Typography
              sx={{ color: "white", width: { xs: "100%", md: "30%" }}}
            >
              The superior twin would perfectlly match the needs of those who
              plan to stay long. the bright and airy room is equipped with
              superior soft italian ferniture.Large windows open a beautifull
              view to the historical part of the city .Contemporary Interior
              design and comfortable beds will make your stay cosy and
              delightful
            </Typography>
          </Stack>
        </Stack>
        <Stack width="80%" mx={"auto"} p={4}>
          <p style={{ color: "#FCD043" }}>Premier Standard</p>
        </Stack>
        <Stack width={{ xs: "100%", md: "80%" }} mx={"auto"} height={"60vh"}>
          <img className="image-primium" src={img} alt="amage" />
        </Stack>
      </Grid>
      <Grid sx={{ backgroundColor: "#FFCF6", width: "100%" }} p={2}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          rowGap={2}
          columnGap={2}
          width="80%"
          mx={"auto"}
          mt={"130px"}
        >
          <Stack
            direction={"column"}
            width={{ xs: "100%", md: "35%" }}
            rowGap={2}
            columnGap={2}
          >
            <img className="image-left" src={image2} alt="image" />
            <Typography
              sx={{
                color: "#313f31",
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontWeight: "500",
              }}
            >
              Superior Twin
            </Typography>
            <Typography>
              All room in bank hotel have a special charm achieved through a
              combination of moderen functional Design and Orignal 20th century
              layout
            </Typography>
          </Stack>
          <Stack
            direction={"column"}
            width={{ xs: "100%", md: "35%" }}
          
            rowGap={2}
            columnGap={2}
          >
            <img className="image-right" src={image3} alt="image" />
            <Typography>
              The Superior twin includes two functional zones: a living room
              with the best italian furniture and an isolated cozy bed room with
              a large bed. Here you will find space both for work and
              comfertable rest.Hottel offer Supreme comfort and outstanding 24
              hour room servicesto make sure that the time you spend here is
              enjoyable and pleasant.
            </Typography>
          </Stack>
        </Stack>
        <Stack width={"80%"} mx={"auto"} direction={"column"} mt={"40px"}>
          <Button
            sx={{ width: "150px", color: "#313f31" }}
            variant="outlined"
            startIcon={<FlareIcon />}
          >
            Book room
          </Button>
        </Stack>
      
      </Grid>
    </Grid>
  );
};

export default MainRoom;
