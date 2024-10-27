import {Col} from 'react-bootstrap';
import {BootcampsLanding} from './BootcampsLanding';
import '../assets/css/BootcampsLanding.css';

//Importacion imagenes
import Java from '../assets/img/java-logo.png';
import Fullstack from '../assets/img/fullstack-logo.png';
import Data from '../assets/img/data-logo.png';

const courses = [
  { title: 'Java Developer', image:Java, description: 'Aprende Java desde cero hasta un nivel avanzado, incluyendo el desarrollo de aplicaciones backend robustas.', bgColor: 'linear-gradient(135deg, #2800d9, #d10123)'},
  { title: 'Full Stack Jr.' , image:Fullstack, description: 'Curso orientado a aprender desarrollo Fullstack con ReactJS, Laravel y MySQL.', bgColor: 'linear-gradient(135deg, #2603bd, #e98905)' },
  { title: 'Data Analytics' , image:Data, description: 'Curso de análisis de datos con enfoque en Python, PowerBI y R para generar insights y visualización de datos.', bgColor: 'linear-gradient(135deg, #2502d3, #709241)' },
];

export const BootcampsList = () => {
  return (
    <section className=" my-4">
      <Col>
        {courses.map((course, index) => (
          <BootcampsLanding 
            key={index} 
            image={course.image}
            title={course.title} 
            description={course.description} 
            bgColor={course.bgColor}
          />
        ))}
      </Col>
    </section>
  );
};

