import React from "react";
import Header from "../../components/Header/header";
import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "../../colors";
import PlaceIcon from "@mui/icons-material/Place";
import FormContact from "../../components/FormContact/formContact";

const styleContact = {
  width: "44px",
  height: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ededed",
  borderRadius: "2px",
  color: "#c5373c",
  margin: "0 10px"
};

export default function Form() {
  return (
    <>
      <Container
        maxWidth="100%"
        style={{
          backgroundColor: "#ededed",
          borderRadius: "2px",
          padding: "50px 0",
          minHeight: "85vh"
        }}
      >
        <Container maxWidth="lg" >
          <Typography
            variant="h3" fontSize={"45px"} fontFamily={"Bebas Neue"} textAlign={"center"}
          >
            Let's Discuss Your <br />
            <span style={{ color: COLORS.red }}> Next Project!</span>
          </Typography>
          <Grid spacing={4} marginTop="30px">
            <Grid container>
              <Grid
                item
                md={6}
                sx={12}
                sm={12}
                backgroundColor={"#232323"}
                color={"#f0f0f0"}
                padding={"20px 30px"}
                fontSize={"20px"}
                textAlign={"right"}
              >
                <Box>
                  <Typography
                    variant="h5"
                    textAlign={"right"}
                    fontFamily={"Roboto Condensed"}
                    fontWeight={400}
                  >
                    Fill out the form, or call us to <br />
                    set up a free in-home consultation
                  </Typography>
                </Box>
                <Box margin={"30px 0px"}>
                    <span style={{ color: COLORS.white, fontFamily: "Roboto Condensed", fontWeight: 200 }}>Service Areas:</span>{" "}
                    North Island
                </Box>
                <Box
                  margin={"30px 0px"}
                  display={"flex"}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                >
                  <Box style={styleContact}>
                    <PlaceIcon />
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    fontWeight={'200'}
                    textAlign={"center"}
                  >
                    Te Rapa <br />
                    Hamilton
                  </Box>
                </Box>
                <Grid display={"flex"} justifyContent={"flex-end"} fontWeight={200} flexWrap={"wrap"} columnGap={4} >
                  <Grid display={"flex"} alignItems={"center"}  flexWrap={"wrap"}  >
                    <Grid
                      display={"flex"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      flexDirection={"column"}
                      fontFamily={"Roboto Condensed"}
                      sx={{ alignItems: "flex-end"}}
                    >
                      ruan@icegroup.co.nz
                      <span>027 506 7912</span>
                    </Grid>
                  </Grid>
                
                  <Grid display={"flex"} alignItems={"center"}  flexWrap={"wrap"}>
                    <Grid
                      display={"flex"}
                      sx={{ alignItems: "flex-end"}}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      flexDirection={"column"}
                      flexWrap={"wrap"}
                    >
                      angelo@icegroup.co.nz
                      <span>021 251 1679</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid padding={"20px 30px"} item md={6} sm={12} backgroundColor={"#f0f0f0"}>
                <FormContact />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
      
    </>
  );
}
