import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import MusicCard from "./MusicCard";

const Music = ({ heading, data }) => {

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {data && data.map((project, index) => (
            <MusicCard
              key={`project-card-${index}`}
              id={`project-card-${index}`}
              value={project}
            />
          ))
          }
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Music;
