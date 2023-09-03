import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../colors";
import industrial from "./../../images/coatings/industrial.jpg";
import residencial from "./../../images/coatings/residencial.jpg";
import comercial from "./../../images/coatings/comercial.jpg";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import HorizontalRuleTwoToneIcon from "@mui/icons-material/HorizontalRuleTwoTone";
function Services() {
  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundColor: "#fffff0",
        borderRadius: "2px",
        padding: "40px 0",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          fontSize={"45px"}
          fontFamily={"Bebas Neue"}
          textAlign={"center"}
        >
          Services <br />{" "}
        </Typography>
        <Typography textAlign={"center"} marginTop={"18px"} fontFamily={'Roboto Condensed'} fontWeight={300} fontSize={"18px"} padding={"0 60px"}>
        With a commitment to using only the best products and techniques, we guarantee that your project will be completed with precision and excellence. 
        </Typography>
        <Grid spacing={2} marginTop="20px" marginBottom={"20px"}>
          <Grid container justifyContent={"space-around"}>
            <Box display="flex" flexDirection="column" alignItems="center" >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius={"100%"}
                width={"180px"}
                height={"180px"}
                backgroundColor={COLORS.red}
                margin={"10px 0px"}
              
              >
                <img
                  src={comercial}
                  alt="commercial"
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "100%", filter: "grayscale(0.5)"}} 
                />
              </Box>
              <Typography
                variant="caption"
                fontFamily={"Bebas Neue"}
                fontSize={"17px"}
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <HorizontalRuleTwoToneIcon
                  style={{
                    color: `${COLORS.red}`,
                    transform: "rotateZ(-64deg)",
                    fontSize: "35px",
                    marginLeft: "-25px",
                    marginRight: "-10px"
                  }}
                />
                commercial coatings
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius={"100%"}
                width={"180px"}
                height={"180px"}
                backgroundColor={COLORS.red}
                margin={"10px 0px"}
              >
                <img
                  src={industrial}
                  alt="industrial"
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "100%", filter: "grayscale(0.5)"}} 

                />
              </Box>
              <Typography
                variant="caption"
                fontSize={"17px"}
                fontFamily={"Bebas Neue"}
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <HorizontalRuleTwoToneIcon
                  style={{
                    color: `${COLORS.red}`,
                    transform: "rotateZ(-64deg)",
                    fontSize: "35px",
                    marginLeft: "-25px",
                    marginRight: "-10px"
                  }}
                />
                industrial coatings
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius={"100%"}
                width={"180px"}
                height={"180px"}
                backgroundColor={COLORS.red}
                margin={"10px 0px"}
              >
                <img
                  src={residencial}
                  alt="residencial"
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "100%", filter: "grayscale(0.5)"}} 
                />
              </Box>

              <Typography
                variant="caption"
                fontSize={"17px"}
                fontFamily={"Bebas Neue"}
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <HorizontalRuleTwoToneIcon
                  style={{
                    color: `${COLORS.red}`,
                    transform: "rotateZ(-64deg)",
                    fontSize: "35px",
                    marginLeft: "-25px",
                    marginRight: "-10px"
                  }}
                />
                residential coatings
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Services;
