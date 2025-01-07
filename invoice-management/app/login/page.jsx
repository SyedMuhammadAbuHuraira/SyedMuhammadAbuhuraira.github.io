// app/login/page.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f3f4f6, #e2e8f0); /* Soft gradient background */
  backdrop-filter: blur(10px); /* Blur effect for transparency */
`;

const Logo = styled.img`
  width: 180px; /* Adjusted size for the logo */
  height: auto;
  margin-bottom: 20px; /* Space below the logo */
`;

const Title = styled.h1`
  font-size: 32px; /* Larger title */
  color: #2d3748; /* Darker color for contrast */
  margin-bottom: 20px; /* Space between title and inputs */
  font-family: 'Arial', sans-serif; /* Font style */
`;

const Input = styled.input`
  width: 320px; /* Adjusted width */
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #cbd5e0; /* Light gray border */
  border-radius: 8px; /* Rounded corners for inputs */
  font-size: 16px; /* Increased font size */
  transition: border-color 0.3s; /* Smooth transition for border color */

  &:focus {
    border-color: #3182ce; /* Blue border on focus */
    outline: none; /* Remove default outline */
  }
`;

const Button = styled.button`
  width: 320px; /* Adjusted width */
  padding: 12px;
  background-color: #3182ce; /* Brand color */
  color: white;
  border: none;
  border-radius: 25px; /* More rounded corners */
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px; /* Increased font size */
  transition: background-color 0.3s, transform 0.3s; /* Smooth transitions */

  &:hover {
    background-color: #2b6cb0; /* Darker blue on hover */
    transform: scale(1.05); /* Slightly grow button on hover */
  }
`;

const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Align to the right */
  width: 320px; /* Same width as the input */
  margin-top: 5px; /* Space between the button and the link */
`;

const ForgotPassword = styled.a`
  color: #2d3748; /* Darker color for link */
  cursor: pointer;
  text-decoration: underline; /* Underline for better visibility */
  font-size: 14px; /* Slightly larger font size */
  transition: color 0.3s; /* Smooth color transition */

  &:hover {
    color: #1a202c; /* Change color on hover */
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Hardcoded credentials
    const hardcodedEmail = 'user@example.com';
    const hardcodedPassword = 'password';

    // Check if the entered credentials match the hardcoded values
    if (email === hardcodedEmail && password === hardcodedPassword) {
      localStorage.setItem('token', 'your_token_here'); // Set token in local storage
      router.push('/dashboard'); // Redirect to the dashboard
    } else {
      alert('Invalid email or password'); // Show an alert for invalid credentials
    }
  };

  return (
    <Container>
      <Logo src="/sojourn.png" alt="CareOptima Logo" />
      <Title>Sign in to Invoice Management</Title>
      <Input
        type="text"
        placeholder="Email or Phone Number"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update email state
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update password state
      />
      <ForgotPasswordContainer>
        <ForgotPassword>Forgot Password?</ForgotPassword>
      </ForgotPasswordContainer>
      <Button onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;