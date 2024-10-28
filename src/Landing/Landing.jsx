import { BootcampsList } from '../components/BootcampsList';
import '../assets/css/BootcampsLanding.css';
//importanción de imágenes
import banner01 from '../assets/img/homepage-ai-hero-2.webp';
import columnImage from '../assets/img/pluralsight-one-collage.webp';
import Footer from '../components/Footer';

export default function Landing() {

    return (
        <div>
          <section className="mt-3 container">
            <h1 className='fs-1 text-white container'><strong>Kódigo te permite llevar tus habilidades al siguiente nivel</strong></h1>
            <h1 className='text-white fs-5'>Desarrolla habilidades tecnológicas críticas. Reduce los tiempos de los ciclos. Crea equipos tecnológicos más felices y eficientes.</h1>
            <img src={banner01} className="w-100"></img>
            </section>

            <div className='d-flex flex-column pt-5 m-0 bootcampContainer'>
            
                <p className='fs-1 text-white'><strong>Transforma tu pasión en tu profesión</strong></p>
                <p className='text-white fs-5'>Estudia una carrera tecnológica y descubre tu potencial para rekodificar el futuro</p>
                <section className="boot-container container py-1 mb-4 bootcampContainer">
                <BootcampsList />
                </section>
            </div>

            <section className="container py-5">
                <div className="row align-items-center">
                    
                    <div className="col-md-6 text-white text-center text-md-start mb-4 mb-md-0">
                        <h2 className="fs-1"><strong>Explora nuestras oportunidades</strong></h2>
                        <p className="fs-5">Da el siguiente paso en tu carrera con nuestros programas personalizados que te preparan para el éxito.</p>
                        <button className="btn btn-primary">Conoce más</button>
                    </div>
                    
                    <div className="col-md-6 text-center order-md-2">
                        <img src={columnImage} alt="Oportunidades" className="img-fluid w-100" />
                    </div>
                </div>
            </section>
            <section className="m-0 p-0"><Footer/></section>
            
        </div>
    )
}