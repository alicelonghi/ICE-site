import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../colors";

function WhoWeAre() {
  return (
    <Container maxWidth="xl" style={{ borderRadius: "2px" }}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          marginTop="15px"
          padding={"20px 0"}
          className="containerPadding"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            textAlign="right"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ paddingTop: 0, paddingRight: "25px" }}
            className="textMain"
          >
            <div>
              <Typography
                variant="h3"
                fontSize={"45px"}
                fontFamily={"Bebas Neue"}
              >
                ICE Group <br />
                <span style={{ color: COLORS.red }}>Coatings Systems</span>
              </Typography>
              <br />

              <Typography
                
                fontSize={"18px"}
                fontFamily={"Roboto Condensed"}
                fontWeight={"300"}
              >
                With more than 10 years of combined experience, our industrial
                coatings company stands as a beacon of expertise in the field.
                <br />
                We have honed our craft through years of dedicated research and hands-on application.
                The result? A profound understanding of of protective coatings.
                Our commitment to quality and our passion for the work have
                positioned us as a trusted partner for businesses.
                Work on jobsites like Mercury, First Gas, Fonterra, Holcim, is like a walk in the park for us.
              </Typography>
            </div>
          </Grid>
          <Grid container xs={12} md={5} sm={12} className="containerMainImage">
            <img
              src={"/main.jpg"}
              alt="Logo"
              width="500px"
              className="imageMain"
            />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default WhoWeAre;
