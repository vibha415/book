import React from "react";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import { Container } from "../styled/homeStyled";
function Home() {
  return (
    <Container>
      <Header />
      <Section />
      <Footer />
    </Container>
  );
}

export default Home;
