import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const server_url = import.meta.env.VITE_SERVER_URL;

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleEmail(e) {
        setEmail(e.target.value);
        setError(""); // Clear any previous errors
    }

    function handlePassword(e) {
        setPassword(e.target.value);
        setError(""); // Clear any previous errors
    }

    async function handleLogin() {
        // Basic validation
        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }

        try {
            const response = await axios.post(`${server_url}login`, { 
                email, 
                password 
            });

            console.log("Login successful:", response.data);
            navigate("/"); // Assuming you want to redirect to a dashboard
        } catch(error) {
            console.error("Login error:", error.response?.data);
            
            // More specific error handling
            if (error.response) {
                // The request was made and the server responded with a status code
                setError(error.response.data.message || "Login failed. Please check your credentials.");
            } else if (error.request) {
                // The request was made but no response was received
                setError("No response from server. Please check your network connection.");
            } else {
                // Something happened in setting up the request
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

