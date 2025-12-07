import React from "react";
import { Col, Row } from "react-bootstrap";

// Imported Icons
import C from "../../Assets/TechIcons/C++.svg";
import CSharp from "../../Assets/TechIcons/csharp.svg"; // Add if available
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import HTML from "../../Assets/TechIcons/html.svg"; // Add if available
import CSS from "../../Assets/TechIcons/css.svg";   // Add if available
import SASS from "../../Assets/TechIcons/css.svg"; // Add if available
import ReactIcon from "../../Assets/TechIcons/React.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Figma from "../../Assets/TechIcons/figma.svg"; // Add if available
import Postman from "../../Assets/TechIcons/Postman.svg";
import Blender from "../../Assets/TechIcons/blender.svg"; // Add if available
import Photoshop from "../../Assets/TechIcons/photoshop.svg"; // Add if available
import Illustrator from "../../Assets/TechIcons/illustrator.svg"; // Add if available
import Audacity from "../../Assets/TechIcons/audacity.svg"; // Add if available
import Unity from "../../Assets/TechIcons/unity.svg"; // Add if available
import VR from "../../Assets/TechIcons/vr.svg"; // Add if available

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSharp} alt="C#" />
        <div className="tech-icons-text">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>

      {/* Web Development */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="HTML" />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SASS} alt="SASS" />
        <div className="tech-icons-text">SASS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL / Databases</div>
      </Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Figma} alt="Figma" />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      {/* 2D Art */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Photoshop} alt="Photoshop" />
        <div className="tech-icons-text">Photoshop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Illustrator} alt="Illustrator" />
        <div className="tech-icons-text">Illustrator</div>
      </Col>

      {/* 3D Modeling */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Blender} alt="Blender" />
        <div className="tech-icons-text">Blender</div>
      </Col>

      {/* Audio */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Audacity} alt="Audacity" />
        <div className="tech-icons-text">Audacity</div>
      </Col>

      {/* Game Development */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Unity} alt="Unity" />
        <div className="tech-icons-text">Unity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={VR} alt="VR" />
        <div className="tech-icons-text">VR</div>
      </Col>
    </Row>
  );
}

export default Techstack;
