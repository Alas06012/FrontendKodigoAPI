import { Row, Col, Form, Button } from 'react-bootstrap';

export default function Footer(){
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <Row>
         
          <Col md={4}>
            <h5>Sobre Nosotros</h5>
            <p>Nuestros bootcamps están diseñados para que te incorpores a un trabajo en corto plazo. Conoce la experiencia de Kodis que están demostrando su potencial en el mercado laboral</p>
          </Col>

          <Col md={4}>
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Inicio</a></li>
              <li><a href="#" className="text-white">Servicios</a></li>
              <li><a href="#" className="text-white">Contacto</a></li>
              <li><a href="#" className="text-white">Términos y condiciones</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Conéctate con nosotros</h5>
            <div className="d-flex mb-3">
              <a href="#" className="text-white me-3"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="text-white me-3"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-white"><i class="fa-brands fa-youtube"></i></a>
            </div>
            <h5>Conoce más de nuestros bootcamps</h5>
            <Form>
              <Form.Group controlId="newsletter" className="d-flex">
                <Form.Control type="email" placeholder="Correo electrónico" />
                <Button variant="primary" className="ms-2">Registrar</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>

      <a href="#" className="scroll-to-top">
      <i class="fa-solid fa-chevron-up"></i>
      </a>
    </footer>
  );
};
