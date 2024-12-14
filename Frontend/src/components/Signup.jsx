import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleName(e) {
        setName(e.target.value);
        setError(""); // Clear previous errors
    }

    function handleEmail(e) {
        setEmail(e.target.value);
        setError(""); // Clear previous errors
    }

    function handlePassword(e) {
        setPassword(e.target.value);
        setError(""); // Clear previous errors
    }

    async function handleSignup() {
        // Basic validation
        if (!name || !email || !password) {
            setError("Please fill in all fields");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        // Password strength validation
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        const userData = { name, email, password };

        try {
            const response = await axios.post("http://localhost:3000/signup", userData);
            
            console.log("Signup successful:", response.data);
            
            
            alert("You have signed up successfully");
            navigate("/login");
        } catch(error) {
            console.error("Signup error:", error);

           
            if (error.response) {
                // The request was made and the server responded with a status code
                setError(error.response.data.message || "Signup failed. Please try again.");
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
        <div className="signup-container">
            <h1>Sign Up</h1>
            
            <div className="input-group">
                <h3>Name</h3>
                <input 
                    type="text" 
                    value={name}
                    onChange={handleName}
                    placeholder="Enter your full name"
                />

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
                    placeholder="Create a password"
                />
            </div>

            {error && <div className="error-message" style={{color: 'red', marginTop: '10px'}}>{error}</div>}

            <div className="button-group">
                <button onClick={handleSignup}>Signup</button>
            </div>

            <div className="login-link">
                <Link to="/login">Already have an account? Login</Link>
            </div>
        </div>
    );
}

