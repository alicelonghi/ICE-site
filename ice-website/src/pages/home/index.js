import React from "react";
import Header from "../../components/Header/header";
import Partners from "../../components/Partners/partners";
import WhoWeAre from "../../components/WhoWeAre/whoWeAre";
import Services from "../../components/Services/services";
import Form from "../form";

export default function Home() {
  return (
    <>
      <Header />
      <WhoWeAre />
      <Services />
      <Partners />
      <Form />
    </>
  );
}
