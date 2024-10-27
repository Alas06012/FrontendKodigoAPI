import { BootcampsList } from '../components/BootcampsList';
import '../assets/css/BootcampsLanding.css';

export default function Landing() {

    return (
        <div>
            <div className='d-flex flex-column p-0 m-0'>
                <p className='fs-1 text-white'><strong>Transforma tu pasión en tu profesión</strong></p>
                <p className='text-white fs-5'>Estudia una carrera tecnológica y descubre tu potencial para rekodificar el futuro</p>
            </div>
            <section className="boot-container container py-1 mb-4">
                <BootcampsList />
            </section>
        </div>
    )
}