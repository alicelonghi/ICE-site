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

  const services = [{ type: 'Commercial coating', img: comercial}, { type: 'Industrial coating', img: industrial}, { type: 'Residential coating', img: residencial}]
  return (
    <>
      <Header />
      <Banner image={"/cover.png"} />
      <Container maxWidth="md">
        <Box textAlign="center" margin="24px 0" display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="h3"
            fontFamily={"Bebas Neue"}
          >
            Our Services
          </Typography>
          <span style={{ width: "100px", height: "4px", backgroundColor: COLORS.red }} />
        </Box>
        <Box textAlign="center" margin="24px 0">
          <Typography variant="caption" fontSize="18px" >
            We are dedicated to offering you quality services to help you achieve your project goals as smoothly and effectively as possible.
          </Typography>
        </Box>

        <Grid container justifyContent="space-between" spacing={2}>
          {services.map((value, index) => (
            <Grid key={index} item >
              <Box width={270} minHeight={270} display="flex" justifyContent="space-between" flexDirection="column" style={{ backgroundImage: `url(${value.img})`, backgroundPosition: "center", backgroundSize: "cover",}}>
                <Typography fontFamily={"Bebas Neue"} fontSize={'22px'} backgroundColor={COLORS.red} textAlign={"center"} color={"#fff"}>
                  {value.type}
                </Typography>
                <Button style={{ backgroundColor: COLORS.yellow, fontSize: "18px", color: "black", borderRadius: 0 }} >
                  <Typography fontWeight="600" variant="caption">
                    know more
                  </Typography>
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
      <Partners />
      <Footer />
    </>
  );
}
