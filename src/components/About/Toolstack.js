import React from "react";
import { Col, Row } from "react-bootstrap";

// Tools
import fork from "../../Assets/TechIcons/fork.svg";
import figma from "../../Assets/TechIcons/figma.svg"; // Add if available
import clickup from "../../Assets/TechIcons/clickup.svg"; // Add if available
import postman from "../../Assets/TechIcons/Postman.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Additional Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={fork} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Fork</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={figma} alt="Figma" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={clickup} alt="ClickUp" className="tech-icon-images" />
        <div className="tech-icons-text">ClickUp</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Toolstack;