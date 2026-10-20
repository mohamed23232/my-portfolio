import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projectsData } from "./projectsData";

const sections = [
  { category: "game", title: "Game", label: "Games" },
  { category: "vr", title: "VR", label: "VR" },
  { category: "mobile", title: "Mobile", label: "Mobile" },
  { category: "software", title: "Software", label: "Software" },
];

function Projects() {
  const [activeSection, setActiveSection] = useState(sections[0].category);

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.replace("projects-", ""));
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => {
      const element = document.getElementById(`projects-${section.category}`);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (category) => {
    document
      .getElementById(`projects-${category}`)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <div className="project-category-nav">
          {sections.map((section) => (
            <button
              key={section.category}
              className={`project-category-pill ${
                activeSection === section.category ? "active" : ""
              }`}
              onClick={() => scrollToSection(section.category)}
            >
              {section.label}
              <span className="project-category-count">
                {projectsData.filter((project) => project.category === section.category).length}
              </span>
            </button>
          ))}
        </div>
        {sections.map((section) => (
          <div
            key={section.category}
            id={`projects-${section.category}`}
            className="project-category-section"
          >
            <h2 className="project-section-heading">
              {section.title} <strong className="purple">Projects</strong>
            </h2>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {projectsData
                .filter((project) => project.category === section.category)
                .map((project) => (
                  <Col md={4} className="project-card" key={project.id}>
                    <ProjectCard
                      id={project.id}
                      imgPath={project.imgPath}
                      isBlog={project.isBlog}
                      title={project.title}
                      description={project.description}
                      playLink={project.playLink}
                    />
                  </Col>
                ))}
            </Row>
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default Projects;
