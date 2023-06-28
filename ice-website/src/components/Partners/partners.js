import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../colors";

function Partners() {
  return (
    <Container
      maxWidth="xl"
      style={{ backgroundColor: "#f5f5f5", borderRadius: "2px", padding: "40px 0" }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontSize={"45px"} fontFamily={"Bebas Neue"} textAlign={"center"}>
          We work with the <br />{" "}
          <span style={{ color: COLORS.red, fontSize: "45px" }}>
            best Partners
          </span>
        </Typography>
        <Grid spacing={4} marginTop="10px" >
          <Grid container justifyContent={"space-evenly"} >
            <Box display="flex" justifyContent="center" alignItems="center">
              <img src="/partners/altex.png" alt="altex" width={"140px"} />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img src="/partners/dulux.png" alt="dulux" width={"140px"} />
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src="/partners/national-group.png"
                alt="national group"
                width={"140px"}
              />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img src="/partners/resene.png" alt="resene" width={"140px"} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Partners;
