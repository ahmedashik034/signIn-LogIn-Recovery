import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './SignUp.css';
import image1 from '../../Images/Rectangle 546.png';

const SignUp = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={image1} alt="Sign Up" />
      </div>
      <div className="form-container">
        <h2>Create an Account</h2>
        <p>Please sign up to continue</p>
        
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" placeholder="Your Name" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="yourname@gmail.com" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select id="type" name="type" required>
              <option value="" disabled selected>Select</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
              <option value="organization">Organization</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className="form-options">
            <div>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree with your terms and conditions of services</label>
            </div>
          </div>

          <button type="submit" className="btn">Sign Up</button>

          <div className="signup-link">
            <p>Already have an account? <Link to="/">Sign In</Link></p> {/* Use Link for navigation */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
