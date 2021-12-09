import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { Container1, Card1, H6, Img, Button1 } from "../styled/sectionStyled";
import book from "../image/book.jpg";
import book1 from "../image/book1.jpg";
import book2 from "../image/book2.jpg";
import book3 from "../image/book3.jpeg";
import book4 from "../image/book4.jpeg";
import book5 from "../image/book5.jpeg";
import bookb from "../image/bookb.jpg";
import book1b from "../image/book1b.jpg";
import book2b from "../image/book2b.jpg";
import book3b from "../image/book3b.jpg";
import book4b from "../image/book4b.jpg";
import book5b from "../image/book5b.jpg";

function SelectedBook({ selectedItem }) {
  const [front, setFront] = useState(true);
  const { name, img, imgb } = selectedItem;
  console.log(imgb, "imgb");
  return (
    <>
      {front ? (
        <div>
          <Container>
            <Img src={img} alt={img} />
            <p
              className="formfont"
              style={{
                textAlign: "center",
                lineHeight: "10px",
                margin: "0",
              }}
            >
              {name}
            </p>
            <center>
              <p
                className="formfont"
                href=""
                onClick={() => {
                  setFront(false);
                }}
                style={{ lineHeight: "10px", margin: "0" }}
              >
                View
              </p>
            </center>
          </Container>
        </div>
      ) : (
        <div>
          <Container>
            <Img src={imgb} alt={imgb} />
            <p
              className="formfont"
              style={{
                textAlign: "center",
                lineHeight: "10px",
                margin: "0",
              }}
            >
              {name}
            </p>
            <center>
              <p
                className="formfont"
                href=""
                onClick={() => {
                  setFront(true);
                }}
                style={{ lineHeight: "10px", margin: "0" }}
              >
                View
              </p>
            </center>
          </Container>
        </div>
      )}
    </>
  );
}
export default SelectedBook;
