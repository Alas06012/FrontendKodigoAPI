import { Col, Row } from 'react-bootstrap';
import { BootcampsLanding } from './BootcampsLanding';
import '../assets/css/BootcampsLanding.css';

//Importacion imagenes
import bootcampIcon from '../assets/img/Java-Developer@4x-1.webp';

//Importanción del servicio de Bootcamps
import BootcampService from "../services/BootcampService";
import { useEffect, useState } from 'react';


export const BootcampsList = () => {

  const [courses, setCourses] = useState([]);

  //Con esto uso el servicio de Bootcamp
  const loadBootcamps = async () => {
    const bootcampService = new BootcampService();

    setCourses(await bootcampService.listBootcamps());

  }

  useEffect(() => {

    loadBootcamps();

  }, [])

  return (
    <section className=" my-4">
      <Row>
        {courses.map((course) => (
          <BootcampsLanding
            key={course.id}
            image={bootcampIcon}
            title={course.name}
            description={course.description}
            bgColor="linear-gradient(135deg, #2603bd, #e98905)"
          />
        ))}
      </Row>
    </section>
  );
};

