import styled from "styled-components";
import { Container, Navbar } from "react-bootstrap";

export const Container1 = styled(Container)`
  padding: 0px;
  font-weight: bold;
`;
export const Brand = styled(Navbar.Brand)`
  font-size: 30px;
  /* @media screen and (max-width: 768px) {
    font-size: 25px;
  } */
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
export const Brand1 = styled(Navbar.Brand)`
  font-size: 20px;
  /* @media screen and (max-width: 768px) {
    font-size: 25px;
  } */
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
