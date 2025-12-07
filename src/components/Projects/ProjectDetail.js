import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProjectById } from "./projectsData";
import Particle from "../Particle";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { MdArrowBack } from "react-icons/md";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <Container fluid className="project-detail-section">
        <Particle />
        <Container>
          <div className="not-found">
            <h2 style={{ color: "white" }}>Project not found</h2>
            <Link to="/project" className="back-button">
              <MdArrowBack /> Back to Projects
            </Link>
          </div>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-detail-section">
      <Particle />
      <Container>
        {/* Back Button */}
        <Link to="/project" className="back-button-top">
          <MdArrowBack /> Back to Projects
        </Link>

        {/* Project Header */}
        <Row className="project-header-section">
          <Col lg={8}>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-short-desc">{project.shortDescription}</p>
          </Col>
        </Row>

        {/* Main Image */}
        <Row className="project-image-section">
          <Col lg={12}>
            <img src={project.imgPath} alt={project.title} className="project-detail-image" />
          </Col>
        </Row>

        {/* Detailed Description */}
        <Row className="project-description-section">
          <Col lg={12}>
            <div className="project-detail-description">
              <h2 className="section-title">About This Project</h2>
              <p className="description-text">
                {project.detailedDescription.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <React.Fragment key={index}>
                      {paragraph}
                      <br />
                      <br />
                    </React.Fragment>
                  )
                ))}
              </p>
            </div>
          </Col>
        </Row>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <Row className="project-features-section">
            <Col lg={12}>
              <h2 className="section-title">Key Features</h2>
              <Row className="features-grid">
                {project.keyFeatures.map((feature, index) => (
                  <Col md={6} key={index} className="feature-item">
                    <div className="feature-card">
                      <div className="feature-number">{index + 1}</div>
                      <p className="feature-text">{feature}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )}

        {/* Technologies */}
        <Row className="project-technologies-section">
          <Col lg={12}>
            <div className="technologies-section">
              <h3 className="section-title">Technologies Used</h3>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Images Gallery */}
        {project.images && project.images.length > 0 && (
          <Row className="project-gallery-section">
            <Col lg={12}>
              <h2 className="section-title">Project Gallery</h2>
              <Row>
                {project.images.map((image, index) => (
                  <Col md={6} key={index} className="gallery-item">
                    <img src={image} alt={`${project.title} ${index + 1}`} className="gallery-image" />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )}

        {/* Videos Section */}
        {project.videos && project.videos.length > 0 && (
          <Row className="project-videos-section">
            <Col lg={12}>
              <h2 className="section-title">Project Videos</h2>
              <Row>
                {project.videos.map((video, index) => (
                  <Col md={6} key={index} className="video-item">
                    <iframe
                      width="100%"
                      height="315"
                      src={video}
                      title={`${project.title} Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default ProjectDetail;
