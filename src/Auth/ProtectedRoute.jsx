import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                setIsAuthenticated(false);
                return;
            }

            try {
                const response = await fetch('http://localhost:5000/api/auth/dashboard', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Error en la verificación del token:', error);
                setIsAuthenticated(false);
            }
        };

        verifyToken();
    }, [token]);


    return isAuthenticated ? children : navigate('/');
};

export default ProtectedRoute;
