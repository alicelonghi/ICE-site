import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Banner from "../../components/Banner/banner";
import Partners from "../../components/Partners/partners";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import { COLORS } from "../../colors";
import { services } from "./servicesContent";
import Form from "../form";
export default function Catalog() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: "50px", minHeight: "90vh" }} >
        <Typography variant="h3" textTransform={"uppercase"} fontFamily={"Roboto Condensed"} fontWeight={500} textAlign={"center"}>
          Explore our services
        </Typography> 
        <Box display={"flex"} justifyContent={"center"} margin={"20px 0"}>
          <Typography variant="body2" fontFamily={"Roboto Condensed"} fontSize="18px" fontWeight={300} textAlign={"center"} maxWidth={"md"} marginBottom={"20px"}>
          The company offers a range of painting services, including
                interior/exterior painting, and spray painting. < br /> We use only
                high-quality paints and materials, and our team of experienced
                professionals ensure that every job is completed to the highest
                standards.
          </Typography>
        </Box>


        <Grid container spacing={6} justifyContent={"center"} marginBottom={"60px"}>
          {services.map((service) => (
            <Grid item>
              <Card item sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ minHeight: 160 }}
                  image={service.img}
                  title="service image"
                />
                <CardContent style={{ minHeight: "225px"}}>
                  <Typography gutterBottom component="div" fontFamily={"Bebas Neue"} fontSize={28} color={COLORS.black} textAlign={"center"}>
                    {service.type}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Partners />
      <Form />
    </>
  );
}
