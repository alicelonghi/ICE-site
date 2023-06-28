import { Container } from "@mui/material";
import React from "react";


function Banner({ image, children }) {
  return (
    <Container
      style={{
        backgroundImage: `url(${image})`,
        height: "15vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        maxWidth: "100vw",
        margin: 0,
        filter: "opacity(0.7)",
      }}
    >
      {children}
    </Container>
  );
}

export default Banner;
