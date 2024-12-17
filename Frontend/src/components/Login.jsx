import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const server_url = import.meta.env.VITE_SERVER_URL;
const local_url = 'http://localhost:3000/'; // Fallback local URL

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
            navigate("/");
        }
    }, [navigate]);

    function handleEmail(e) {
        setEmail(e.target.value);
        setError(""); 
    }

    function handlePassword(e) {
        setPassword(e.target.value);
        setError(""); 
    }

    async function tryUrl(url, data) {
        try {
            const response = await axios.post(`${url}login`, data, { timeout: 5000 });
            return response;
        } catch (error) {
            if (error.code === 'ECONNABORTED' || !error.response) {
                throw new Error('NETWORK_ERROR');
            }
            throw error;
        }
    }

    async function handleLogin() {
        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }

        const loginData = { email, password };

        try {
            let response;
            try {
                response = await tryUrl(server_url, loginData);
            } catch (error) {
                if (error.message === 'NETWORK_ERROR') {
                    console.log("Main server not responding, trying localhost...");
                    response = await tryUrl(local_url, loginData);
                } else {
                    throw error;
                }
            }

            console.log("Login successful:", response.data);
            setUserId(response.data.userId);
            localStorage.setItem('userId', response.data.userId);
            navigate("/"); 
        } catch(error) {
            console.error("Login error:", error.response?.data);
            
            if (error.response) {
                setError(error.response.data.message || "Login failed. Please check your credentials.");
            } else if (error.request) {
                setError("No response from server. Please check your network connection.");
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            
            <div className="input-group">
                <h3>Email</h3>
                <input 
                    type="email" 
                    value={email} 
                    onChange={handleEmail}
                    placeholder="Enter your email"
                />

                <h3>Password</h3>
                <input 
                    type="password" 
                    value={password} 
                    onChange={handlePassword}
                    placeholder="Enter your password"
                />
            </div>

            {error && <div className="error-message" style={{color: 'red'}}>{error}</div>}

            <div className="button-group">
                <button onClick={handleLogin}>Login</button>
            </div>

            <div className="signup-link">
                <Link to="/">Don't have an account? Sign Up</Link>
            </div>
        </div>
    );
}

