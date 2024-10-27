import { Card, Col } from 'react-bootstrap';
import '../assets/css/BootcampsLanding.css';

export const BootcampsLanding = ({title, image, description, bgColor}) => {
  return (
    <Col className="mb-3">
      <Card className="boot-card h-100" style={{ background: bgColor }}>
        <Card.Body>
          <Card.Img variant="top" src={image} alt={title} className="boot-image img-fluid w-50" />
          <Card.Title className="fs-3 fs-md-2 fs-lg-1 text-white mt-4">{title}</Card.Title>
          <Card.Text className="fs-6 fs-md-4 fs-lg-3 text-white">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
