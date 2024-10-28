import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const BASEurl = 'http://localhost:5000/api/auth/';

export default function Register() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');

    const handleRegister = async (data) => {
        const userData = {
            username: data.username,
            password: data.password,
        };

        try {
            const response = await fetch(BASEurl + 'register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const responseData = await response.json();
            console.log(responseData);

            if (response.ok) {
                setMessage('Usuario registrado exitosamente');
                Swal.fire({
                    title: 'Registro Exitoso',
                    text: 'Usuario registrado exitosamente',
                    icon: 'success',
                    toast: true,
                    position: 'top',
                    iconColor: 'white',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#28a745',
                    color: 'white',
                });

                reset();
            } else {
                setMessage('Error al registrar usuario: ' + responseData.message);
                Swal.fire({
                    title: 'Error',
                    text: responseData.message,
                    toast: true,
                    position: 'top',
                    icon: 'error',
                    iconColor: 'white',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#d62f0c',
                    color: 'white',
                });
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error al conectar con la API');
            Swal.fire({
                title: 'Error',
                text: 'Error al conectar con la API',
                toast: true,
                position: 'top',
                icon: 'error',
                iconColor: 'white',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#d62f0c',
                color: 'white',
            });
        }
    };

    const onError = (errors) => {
        if (errors.username) {
            Swal.fire({
                title: 'Error en el campo Nombre Usuario',
                text: errors.username.message,
                toast: true,
                position: 'top',
                icon: 'error',
                iconColor: 'white',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#d62f0c',
                color: 'white',
            });
        } else if (errors.password) {
            Swal.fire({
                title: 'Error en el campo Contraseña',
                text: errors.password.message,
                toast: true,
                position: 'top',
                icon: 'error',
                iconColor: 'white',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#d62f0c',
                color: 'white',
            });
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center text-white p-3 p-md-5 mt-5">
            <div className="w-10">
                <h2 className="text-2xl fw-bold">
                    <span style={{ color: '#803cae' }}>Registro de Usuarios</span>
                </h2>
                <hr className="mb-4"/>
                <form onSubmit={handleSubmit(handleRegister, onError)}>
                    <div className="mb-3">
                        <label className="form-label"> Nombre de Usuario: </label>
                        <input className="form-control"
                            type="text"  placeholder="Nombre usuario"
                            {...register("username", { required: "El nombre de usuario es obligatorio" })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Contraseña: </label>
                        <input className="form-control"
                            type="password" placeholder="********"
                            {...register("password", { required: "La contraseña es obligatoria" })}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="w-100 mb-3 btn" style={{ background: '#803cae' }}>Registrar</button>
                    </div>
                </form>

            </div>
        </div>
    );
};



