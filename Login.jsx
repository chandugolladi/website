import React, { useState } from 'react';
import axios from 'axios';
import '../style/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [isMfaEnabled, setIsMfaEnabled] = useState(false);
    const [mfaSent, setMfaSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Handle login with username and password
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password });

            if (response.data.mfaRequired) {
                // If MFA is required, enable MFA and send OTP
                setIsMfaEnabled(true);
                await axios.post('/api/send-otp', { username });
                setMfaSent(true);
            } else if (response.data.token) {
                // Successful login - save JWT token
                localStorage.setItem('token', response.data.token);
                alert('Login successful');
            } else {
                setErrorMessage('Invalid username or password');
            }
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage('Login failed. Please try again.');
        }
    };

    // Handle OTP submission for MFA
    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/validate-otp', { username, otp });
            if (response.data.success && response.data.token) {
                // MFA successful - save JWT token
                localStorage.setItem('token', response.data.token);
                alert('MFA successful, you are logged in!');
            } else {
                setErrorMessage('Invalid OTP');
            }
        } catch (error) {
            console.error("OTP validation error:", error);
            setErrorMessage('Failed to validate OTP. Please try again.');
        }
    };

    return (
        <div id="login-container">
            <h2>Login</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {!isMfaEnabled ? (
                <form id="login-form" onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            ) : (
                mfaSent && (
                    <form id="login-form" onSubmit={handleOtpSubmit}>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                        <button type="submit">Submit OTP</button>
                    </form>
                )
            )}
        </div>
    );
};

export default Login;