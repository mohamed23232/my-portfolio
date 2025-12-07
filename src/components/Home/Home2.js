import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a Junior Unity Developer experienced in PC and VR with a Computer Engineering background, passionate about creating engaging and polished gameplay experiences.
            I specialize in <b className="purple">Unity (2D & 3D)</b>, <b className="purple">C#</b>, and writing clean, maintainable code using solid OOP principles and design patterns.
            I also have experience with <b className="purple">gameplay programming</b>, <b className="purple">AI basics</b>, and using tools that support smooth development workflows.
            <br />
            <br />
            I enjoy building interactive systems, optimizing player experiences, and continuously improving my craft as a game developer.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
