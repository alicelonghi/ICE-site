import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../colors";

function WhoWeAre() {
  return (
    <Container maxWidth="xl" style={{ borderRadius: "2px" }}>
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
            style={{ paddingTop: 0, paddingRight: "35px"}}
          >
            <div>
              <Typography
                variant="h3"
                fontSize={"50px"}
                fontFamily={"Bebas Neue"}
              >
                ICE Group <br />
                <span style={{ color: COLORS.red }}>painting company</span>
              </Typography>
              <br />

              <Typography variant="caption" fontSize={"18px"} fontFamily={'Roboto Condensed'}>
              The ICE Group painting company is a leading provider of painting and decorating services for commercial, Industrial and residential properties. With years of experience, the ICE Group has become one of the most trusted names in the painting and decorating industry.
              </Typography>
            </div>
          </Grid>
          <Grid container xs={12} md={6}>
            <img src={"/main.jpg"} alt="Logo" width="600px"/>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default WhoWeAre;
