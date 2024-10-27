import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            console.log(username)
            console.log(password)
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                Swal.fire({
                    toast: true,
                    position: 'top',
                    icon: 'error',
                    iconColor: 'white',
                    title: 'Email o Password erroneos',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#803cae',
                    color: 'white',
                });
            }

        } catch (error) {
            Swal.fire({
                toast: true,
                position: 'top',
                icon: 'error',
                iconColor: 'white',
                title: 'Error al iniciar sesion: ' + error,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#803cae',
                color: 'white',
            });
        }

    };

    return (
        <div className="d-flex align-items-center justify-content-center bg-dark text-white p-3 p-md-5">
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <div className="text-center mb-4">
                    <svg className="mb-3" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Contenido del SVG */}
                    </svg>
                    <h2 className="text-2xl fw-bold">
                        <span className="text-secondary">Ko</span>
                        <span className="text-info">di</span>
                        <span className="text-warning">go</span>
                        <span style={{ color: '#803cae' }}> Login!</span>
                    </h2>
                </div>

                <hr className="mb-4" />

                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Ejemplo: user@gmail.com"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label ">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="**********"
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button type="submit" className=" w-100 mb-3">Ingresar</button>
                        <Link to='/register' className="text-white"> ¿No tienes una cuenta? Regístrate</Link>
                    </div>


                </form>



            </div>
        </div>
    );
}
