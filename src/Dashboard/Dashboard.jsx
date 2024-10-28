import BootcampService from "../services/BootcampService";
import { useEffect, useState } from 'react';
import { BootcampForm } from "./BootcampForm";
import '../assets/CSS/dashboard.css';
import 'bootstrap/dist/js/bootstrap.bundle';


export default function Dashboard() {

    const [bootcamps, setBootcamps] = useState([]); // es el listado de toos los bootcamps
    const [activeBootcamp, setActiveBootcamp] = useState(null); //Este es el regisstro que voy a editar


    const loadBootcamps = async () => {
        const bootcampService = new BootcampService();

        setBootcamps(await bootcampService.listBootcamps());

    }

    const handleOperationComplete = () => {
        location.reload()
    }

    //"DELETE"
    const softDeleteBootcamp = async (bootcamp) => {
        const bootcampService = new BootcampService();

        await bootcampService.deleteBootcamp(bootcamp.id);
        loadBootcamps();
    }


    const renderBootcampRow = (bootcamp) => {
        return (
            <tr key={bootcamp.id}>
                <td>
                    {bootcamp.name}
                </td>
                <td>
                    {bootcamp.description}
                </td>
                <td>
                    {bootcamp.technologies.join(", ")}
                </td>
                <td>

                    <button onClick={() => { setActiveBootcamp(bootcamp) }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
                        <i className="fas fa-edit"></i></button>
                </td>
                <td>
                    <button className="btn btn-danger ms-2" onClick={() => { softDeleteBootcamp(bootcamp) }}><i className="fas fa-trash"></i></button>
                </td>
            </tr>
        )
    }


    useEffect(() => {

        loadBootcamps();

    }, [])

    return (
        <>
        
        <h1 className='fs-1 text-white container'><strong>Agrega, Edita o Elimina los Bootcamps</strong></h1>
        
        <div className="pt-5 container table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            Bootcamp name
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Technologies
                        </th>
                        <th>

                        </th>
                        <th>

                        </th>

                    </tr>
                </thead>

                <tbody>
                    {bootcamps.map(renderBootcampRow)}
                </tbody>
            </table>
            </div>
            <div className="button-container container">
                <button type="button" className="btn btn-primary btn-primary-lg custom-add-btn" data-bs-toggle="modal" onClick={() => { setActiveBootcamp(null) }} data-bs-target="#editModal"><i className="fas fa-plus"></i></button>
            </div>
            <div className="modal fade" id="editModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="editModalLabel" >{activeBootcamp ? "Edit" : "Add"} Bootcamp</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {activeBootcamp ? (<BootcampForm key={activeBootcamp.id} bootcamp={activeBootcamp} onComplete={handleOperationComplete} />) : (<BootcampForm onComplete={handleOperationComplete} />)}
                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}