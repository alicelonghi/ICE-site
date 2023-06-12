import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Banner from "../../components/Banner/banner";
import Partners from "../../components/Partners/partners";

export default function Catalog() {
  return (
    <>
      <Header />
      <Banner image={"/cover.png"} />
      <div>catalog page</div>
      <Partners />
      <Footer />
    </>
  );
}
