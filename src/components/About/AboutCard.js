import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi everyone!
            <br />
            I’m <span className="purple">Mohamed Rabea</span>, a{" "}
            <span className="purple">Unity Developer</span> from{" "}
            <span className="purple">Egypt</span>.
            <br />
            A Computer Engineering graduate with a strong passion for{" "}
            <span className="purple">game development</span>,{" "}
            <span className="purple">VR development</span>,{" "}
            <span className="purple">AI</span>, and creating interactive experiences.
            <br />
            I am specialized in building gameplay systems, VR/PC experiences,
            clean architecture, and performance-friendly mechanics inside Unity.
            <br />
            <br />
            Outside of development, I enjoy activities that keep me creative and energized:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new tech & improving my skills ⚙️
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating fun ideas & game concepts ✨
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Great games come from passion, creativity, and curiosity."{" "}
          </p>
          <footer className="blockquote-footer">Rabea</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
