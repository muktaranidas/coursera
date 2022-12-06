import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../../Course/LeftSideNav/LeftSideNav";
import CourseSummaryCard from "../../Shared/CourseSummaryCard/CourseSummaryCard";

const LeftRight = () => {
  const allCourse = useLoaderData();
  return (
    <Container>
      <Row>
        <Col lg="8">
          {allCourse.map((course) => (
            <CourseSummaryCard
              key={course._id}
              course={course}
            ></CourseSummaryCard>
          ))}
        </Col>
        <Col lg="4">
          <LeftSideNav></LeftSideNav>
        </Col>
      </Row>
      <div></div>
      {/* <Header></Header>
      <Container>
        <Row>
          <Col lg="5">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container> */}
    </Container>
  );
};

export default LeftRight;
