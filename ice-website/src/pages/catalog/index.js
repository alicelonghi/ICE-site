import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Banner from "../../components/Banner/banner";
import Partners from "../../components/Partners/partners";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid } from "@mui/material";
import { COLORS } from "../../colors";
import industrial from "./../../images/coatings/industrial.jpg";
import residencial from "./../../images/coatings/residencial.jpg";
import comercial from "./../../images/coatings/comercial.jpg";
export default function Catalog() {
  const services = [
    { type: "Commercial coating", img: comercial },
    { type: "Industrial coating", img: industrial },
    { type: "Residential coating", img: residencial },
  ];
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: "50px", minHeight: "90vh" }} >
        <Typography variant="h2" fontFamily={"Bebas Neue"} textAlign={"center"}>
          Services
        </Typography>
        <Grid marginTop="30px">
          <Box textAlign="center" margin="24px 0">
            <Typography fontFamily={"Roboto Condensed"} fontSize="18px">
              The company offers a range of painting services, including
              interior/exterior painting, and spray painting. We use only
              high-quality paints and materials, and our team of experienced
              professionals ensure that every job is completed to the highest
              standards.
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            sm={12}
            flexWrap={"wrap"}
            display={"flex"}
          >
            {services.map((row) => (
              <Grid container sm={12} md={12} margin={"10px 0"} className="serviceImage">
                <Grid
                  item
                  md={7}
                  sm={12}
                  style={{ backgroundColor: "#ededed" }}
                  padding={"20px"}
                >
                  <Typography fontFamily={"Bebas Neue"} fontSize={"24px"}>
                    {row.type}
                  </Typography>
                  <Typography fontFamily={"Roboto Condensed"} paddingTop={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus eu metus finibus, dapibus nisl eu, dapibus justo.
                    Vestibulum vel dictum risus. Nam sed suscipit diam, in
                    tristique nisl. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas. Nunc
                    commodo enim id ligula dignissim eleifend. <br />
                    Vestibulum ex ante, venenatis sed libero a, maximus mattis
                    massa. Integer vulputate, purus cursus facilisis posuere,
                    orci quam consequat arcu, eu mollis eros eros eu leo. Etiam
                    placerat risus orci, eu consequat odio aliquet in. Curabitur
                    at hendrerit tellus, non malesuada sem. Sed at condimentum
                    est, ut laoreet urna.
                  </Typography>
                </Grid>
                <Grid item md={5} sm={12} style={{ backgroundColor: "#f0f0f0" }} >
                  <img src={row.img} alt="Logo" width="100%" height={"380px"}  />
                </Grid>
              </Grid>
            ))}
          </Grid>
         
        </Grid>
      </Container>

      <Partners />

  
    </>
  );
}
