import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import image from "../../../assets/image.jpg";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img className="w-100 p-3" src={image} />
        </Col>
      </Row>
      <div></div>
    </Container>
  );
};
export default Home;
