import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../colors";

function Partners() {
  return (
    <Container maxWidth="xl" style={{ backgroundColor: "#f0f0f0", borderRadius: "2px" }}>
      <Container maxWidth="md">
        <Grid container spacing={4} marginTop="20px" padding={"20px 0"}>
          <Grid
            item
            xs={12}
            md={6}
            textAlign="right"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ paddingTop: 0, paddingRight: "15px"}}
          >
            <div>
              <Typography
                variant="h3"
                fontSize={"35px"}
                fontFamily={"Bebas Neue"}
              >
                We work with the <br />{" "}
                <span style={{ color: COLORS.red }}>best Partners</span>
              </Typography>
              <br />

              <Typography variant="caption" fontSize={"14px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                feugiat sit amet ligula a finibus. Ut id posuere sapien. Proin
                cursus eu erat eleifend imperdiet
              </Typography>
            </div>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid
              item
              md={6}
              xs={6}
              justifyContent="center"
              alignItems="center"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src="/partners/altex.png" alt="altex" width={"160px"} />
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src="/partners/dulux.png" alt="dulux" width={"160px"} />
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              justifyContent={"center"}
              alignItems="center"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src="/partners/national-group.png"
                  alt="national group"
                  width={"160px"}
                />
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src="/partners/resene.png" alt="resene" width={"160px"} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Partners;
