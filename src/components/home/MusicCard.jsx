import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const MusicCard = ({ value }) => {
  const {
    title,
    logo,
    description,
    urls
  } = value;
  return (
    <Col md={4}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Img variant="top" src={logo} style={{ width: '15em', height: '17em' }} />
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <CardFooter urls={urls} />
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardFooter = ({ urls }) => {

  return (
    <div className="card-text" style={{ paddingLeft: '1em' }}>
      <a
        key={`music-icon-apple`}
        target="_blank"
        href={urls.apple}
        rel="noopener noreferrer"
      >
        <i className="fab fa-apple fa-2x" />
      </a>
      <a
        key={`music-icon-spotify`}
        target="_blank"
        href={urls.spotify}
        rel="noopener noreferrer"
        style={{ marginLeft: '1em' }}
      >
        <i className="fab fa-spotify fa-2x" />
      </a>
      <a
        key={`music-icon-melon`}
        target="_blank"
        href={urls.melon}
        rel="noopener noreferrer"
        style={{ marginLeft: '1em' }}
      >
        <i className="fas fa-music fa-2x" />
      </a>
    </div>
  );
};

export default MusicCard;
