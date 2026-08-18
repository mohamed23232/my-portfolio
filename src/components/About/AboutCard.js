import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
  Hi everyone! I’m <span className="purple">Mohamed Rabea</span>, a{" "}
  <span className="purple">Unity Developer</span> from{" "}
  <span className="purple">Egypt</span> and a Computer Engineering graduate
  with a <span className="purple">GPA of 3.46</span>, passionate about{" "}
  <span className="purple">game development</span>,{" "}
  <span className="purple">VR experiences</span>, and{" "}
  <span className="purple">interactive systems</span>.
  <br />
  <br />
  I build gameplay systems for <span className="purple">PC and VR</span> in Unity,
  writing clean, maintainable <span className="purple">C#</span> with solid OOP principles,
  and bring <span className="purple">AI fundamentals</span> and{" "}
  <span className="purple">optimization</span> know-how to improve performance and workflow.
  <br />
  <br />
  Outside of development, I enjoy:
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
