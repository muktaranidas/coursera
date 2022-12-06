import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseSummaryCard = ({ course }) => {
  const { price, _id, header, image_url, details } = course;
  // console.log(course);

  return (
    <div className="d-flex">
      <div>
        <Card className=" mx-auto mb-5" style={{ width: "50%" }}>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title> Title: {header}</Card.Title>
            <Card.Text>
              Rent: <span>{price}</span>
            </Card.Text>

            <Card.Text>
              {details.length > 200 ? (
                <p>
                  {details.slice(0, 250) + "..."}{" "}
                  <Link to={`/courses/${_id}`}>Read More</Link>
                </p>
              ) : (
                <p>details</p>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CourseSummaryCard;
