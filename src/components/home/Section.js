import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { Container1, Card1, H6, Img, Button1 } from "../styled/sectionStyled";
import SelectedBook from "./SelectedBook";
import { AiOutlineCloudUpload } from "react-icons/ai";
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

const books = [
  {
    imgb: bookb,
    img: book,
    name: "book",
  },
  {
    imgb: book1b,
    img: book1,
    name: "book1",
  },
  {
    imgb: book2b,
    img: book2,
    name: "book2",
  },
  {
    imgb: book3b,
    img: book3,
    name: "book3",
  },
  {
    imgb: book4b,
    img: book4,
    name: "book4",
  },
  {
    imgb: book5b,
    img: book5,
    name: "book5",
  },
];
const allName = [
  ...new Set(
    books.map((boo) => {
      return boo.name;
    })
  ),
];
function Section() {
  const [selectedItem, setSelectedItem] = useState(books[0]);
  const [count, setCount] = useState(0);
  const [bookName, setBookName] = useState(allName);
  const filterBook = (booName) => {
    const newBook = books.filter((boo) => boo.img == booName.img);

    const newBook1 = newBook[0];

    setSelectedItem(newBook1);
    setCount(count + 1);
  };

  return (
    <Container fluid style={{ padding: "0px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Container1>
          <Card1>
            <Card.Body>
              <Container>
                <Row>
                  <Col lg={5} style={{ paddingBottom: "50px" }}>
                    <H6>Generate your preview book</H6>

                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="formfont">First Name</Form.Label>
                        <Form.Control
                          className="formfont"
                          type="text"
                          placeholder="Enter First Name"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicFirstName"
                      >
                        <Form.Label className="formfont">Last Name</Form.Label>
                        <Form.Control
                          className="formfont"
                          type="text"
                          placeholder="Enter Last Name"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicLastName"
                      >
                        <Form.Label className="formfont">
                          Email address
                        </Form.Label>
                        <Form.Control
                          className="formfont"
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className="formfont">Phone</Form.Label>
                        <Form.Control
                          className="formfont"
                          type="tel"
                          placeholder="Phone"
                        />
                      </Form.Group>
                      <div>
                        <div></div>
                      </div>
                      <Form.Group
                        controlId="formFile"
                        style={{
                          border: "1px solid #ced4da",
                          borderRadius: "5px",
                          height: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Form.Label
                          className="formfont"
                          style={{ cursor: "pointer", textAlign: "center" }}
                        >
                          <AiOutlineCloudUpload
                            style={{
                              height: "30px",
                              width: "30px",
                              color: "#b2b4b6",
                            }}
                          />

                          <p style={{ color: "#b2b4b6" }}>UPLOAD FILE</p>
                        </Form.Label>
                        <Form.Control
                          className="formfont"
                          type="file"
                          style={{
                            opacity: "0",
                            position: "absolute",
                            zIndex: "-1",
                          }}
                        />
                      </Form.Group>
                      <Form.Text>
                        ** We'll never share your email with anyone else.
                      </Form.Text>
                      <div className="d-grid gap-2">
                        <Button
                          style={{ marginTop: "20px" }}
                          className="formfont"
                          variant="primary"
                          type="submit"
                        >
                          DownLoad Book
                        </Button>
                      </div>
                    </Form>
                  </Col>
                  <Col lg={3} style={{ paddingBottom: "50px" }}>
                    <H6>Book Preview</H6>
                    <SelectedBook selectedItem={selectedItem} />
                  </Col>
                  <Col lg={4} style={{ paddingBottom: "50px" }}>
                    <H6>Choose another book cover</H6>

                    <Container>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-around",
                        }}
                      >
                        {books.map((bo, index) => {
                          return (
                            <>
                              <div key={index}>
                                <Button1
                                  variant="outline"
                                  onClick={() => {
                                    filterBook(bo);
                                  }}
                                >
                                  <img
                                    src={bo.img}
                                    style={{
                                      width: "4rem",
                                      height: "6rem",
                                      transform: "rotate(-5deg)",
                                    }}
                                  />
                                </Button1>

                                <br></br>
                                <p
                                  className="formfont"
                                  style={{ textAlign: "center" }}
                                >
                                  {bo.name}
                                </p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card1>
        </Container1>
      </div>
    </Container>
  );
}

export default Section;
