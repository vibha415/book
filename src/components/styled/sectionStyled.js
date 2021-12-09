import styled from "styled-components";
import { Container, Card, Button } from "react-bootstrap";

export const Container1 = styled(Container)`
  background-color: black;
  /* position: relative; */
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  padding-top: 30px;

  background: linear-gradient(
    to bottom,
    black 0%,
    black 60%,
    white 60%,
    white 100%
  );
`;
export const Card1 = styled(Card)`
  width: 80%;
  /* position: absolute; */
`;
export const Button1 = styled(Button)`
  background-color: white;
  border: none !important;
`;

export const H6 = styled.h6`
  font-weight: bolder;
  font-size: 20px !important;
  margin-bottom: 20px;
  @media screen and (max-width: 1200px) {
    font-size: 16px !important;
  }
  @media screen and (max-width: 1024px) {
    font-size: 15px !important;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px !important;
  }
  @media screen and (max-width: 480px) {
    font-size: 13px !important;
  }
  @media screen and (max-width: 360px) {
    font-size: 11px !important;
  }
`;
export const Img = styled.img`
  width: 12rem;
  height: 18rem;
  transform: rotate(-5deg);
  max-width: 100%;
  width: 100%;
  padding-bottom: 20px;

  @media screen and (max-width: 992px) {
    max-width: 70%;
    width: 70%;
    height: 14rem;
    margin: auto;
    display: block;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    max-width: 80%;
    width: 80%;
    height: 14rem;

    margin: auto;
    display: block;
    padding-bottom: 20px;
  }
`;
