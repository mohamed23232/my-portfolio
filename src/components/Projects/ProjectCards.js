import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaItchIo } from "react-icons/fa";

function ProjectCards(props) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/project/${props.id}`);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleViewDetails}>
          View Details
        </Button>
        {props.playLink && (
          <Button
            variant="primary"
            href={props.playLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <FaItchIo /> &nbsp;Play
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
