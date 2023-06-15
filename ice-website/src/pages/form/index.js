import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Banner from "../../components/Banner/banner";

export default function Form() {
  return (
    <>
      <Header />
      <Banner image={"/cover.png"} />
      <div>Form</div>
      <Footer />
    </>
  );
}
