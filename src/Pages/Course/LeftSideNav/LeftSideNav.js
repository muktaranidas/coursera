import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const LeftSideNav = ({ course }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3>All Courses</h3>
      <div className="mx-auto .bg-success">
        {categories.map((category) => (
          <p key={category.id} course={category}>
            <>
              {["Warning"].map((variant) => (
                <Card
                  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === "light" ? "dark" : "white"}
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>
                    <Link to={`/category/${category.id}`}>
                      <h5>{category.name}</h5>
                    </Link>
                  </Card.Header>
                </Card>
              ))}
            </>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
