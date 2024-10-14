import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider as provider } from '../firebase'; // Corrected path

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('User registered successfully!');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message);
      console.error('Error signing up:', err);
    }
  };

  const handleGoogleSignUp = async () => {
    setError('');
    setSuccess('');

    try {
      await signInWithPopup(auth, provider);
      setSuccess('User signed up with Google successfully!');
    } catch (err) {
      setError(err.message);
      console.error('Error signing up with Google:', err);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleEmailSignUp}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={handleGoogleSignUp} className="btn">Sign Up with Google</button>
    </div>
  );
};

export default SignUp;
