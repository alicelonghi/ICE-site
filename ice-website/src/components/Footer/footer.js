import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "./../../images/logo.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="#">
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
        position: "absolute",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        paddingBottom: "10px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Container maxWidth="xl">
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box display={"flex"} alignItems={"center"}>
              <LocalPhoneIcon />
              <Typography variant="overline" fontSize={"13px"}>
                +11 9999-9999
              </Typography>
            </Box>
            <Box display={"flex"}>
                <LocationOnIcon />
                <Typography variant="overline" fontSize={"13px"}>
                Street name
                </Typography>
            </Box>
          </Box>
          <Typography variant="body1">
            <img src={logo} alt="Logo" width="100px" />
          </Typography>
        </Box>
        <Copyright />
      </Container>
    </footer>
  );
}
