import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Partners from "../../components/Partners/partners";
import WhoWeAre from "../../components/WhoWeAre/whoWeAre";
import Services from "../../components/Services/services";

export default function Home() {
  return (
    <>
      <Header />
      <WhoWeAre />
      <Services />
      <Partners />
      <Footer />
    </>
  );
}
