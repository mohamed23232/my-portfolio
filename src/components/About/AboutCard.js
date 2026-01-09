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
  <br />
  I’m a Computer Engineering graduate with a strong passion for{" "}
  <span className="purple">game development</span>,{" "}
  <span className="purple">VR experiences</span>, and{" "}
  <span className="purple">interactive systems</span>.
  I enjoy turning ideas into polished gameplay mechanics that feel responsive,
  immersive, and fun to play.
  <br />
  <br />
  My main focus is building gameplay systems for{" "}
  <span className="purple">PC and VR</span> using Unity.
  I work extensively with <span className="purple">C#</span>, applying clean architecture,
  solid OOP principles, and common design patterns to keep code maintainable,
  scalable, and performance-friendly.
  <br />
  <br />
  I also have experience with <span className="purple">AI fundamentals</span>,
  and <span className="purple">optimization techniques</span> that improve overall experience and development workflow.
  <br />
  <br />
  Outside of development, I enjoy activities that keep me creative and motivated:
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
