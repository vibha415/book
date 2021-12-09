import React from "react";
import { SiGooglemessages } from "react-icons/si";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Container
        style={{
          backgroundColor: "grey",
          color: "white",
          textAlign: "center",
          padding: "5px",
        }}
      >
        Authority @ All Right Reserved
        <br />
        Private Policy Reserved
      </Container>
      <div
        style={{
          backgroundColor: "#0d6efd",
          borderRadius: "50%",
          color: "white",
          height: "40px",
          width: "40px",
          position: "fixed",
          bottom: "3px",
          right: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SiGooglemessages
          style={{
            fontSize: "24px",
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
