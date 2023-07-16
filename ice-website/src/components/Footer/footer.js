import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import logo from "./../../images/logo.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" fontFamily={'Roboto Condensed'}>
      {"Copyright © "}
      <Link color="inherit">
        ICE - Coatings Systems
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        position: "static",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        paddingBottom: "10px",
        backgroundColor: "#dedede",
      }}
    >
      <Container maxWidth="xl">
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}></Box>
          <Typography variant="body1">
            <img src={logo} alt="Logo" width="100px" />
          </Typography>
        </Box>
        <Copyright />
      </Container>
    </footer>
  );
}
