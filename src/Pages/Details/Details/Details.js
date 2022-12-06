import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ReactToPDF from "../ReactToPDF/ReactToPDF";

const Details = () => {
  const course = useLoaderData();
  const { category_id, header, image_url, details } = course;
  const ref = React.createRef();

  return (
    <Card className=" d-flex mb-5  mx-auto my-auto" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>Card Title: {header}</Card.Title>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <ReactToPDF></ReactToPDF>
      <Link className=" my-3 mx-auto" to={`/category/${category_id}`}>
        <Button variant="primary">Cheack Out </Button>
      </Link>
    </Card>
  );
};

export default Details;
