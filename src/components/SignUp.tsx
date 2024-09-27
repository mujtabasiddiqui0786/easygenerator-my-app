// src/components/SignUp.tsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../apiConfig';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');

  const validatePassword = (password: string): boolean => {
    const lengthRequirement = /.{8,}/;
    const letterRequirement = /[A-Za-z]/;
    const numberRequirement = /[0-9]/;
    const specialCharRequirement = /[!@#$%^&*(),.?":{}|<>]/;

    return (
      lengthRequirement.test(password) &&
      letterRequirement.test(password) &&
      numberRequirement.test(password) &&
      specialCharRequirement.test(password)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validatePassword(password)) {
      setError('Password does not meet requirements.');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, { email, name, password });
      // Optionally, automatically log in the user after sign-up
      const { accessToken } = response.data;
      localStorage.setItem('token', accessToken);
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error: any) {
      setError(error.response?.data?.message || 'Error signing up.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
      <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
