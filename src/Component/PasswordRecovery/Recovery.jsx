import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Recovery.css';
import image1 from '../../Images/Rectangle 546.png';

const Recovery = () => {
    return (
        <div className="container">
            <div className="image-container">
                <img src={image1} alt="Password Recovery" />
            </div>

            <div className="form-container">
                <div className='form-inner-container'>
                    <div className="description">
                        <h2>Password Recovery</h2>
                        <p>Enter your email to recover your password</p>
                    </div>

                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder='yourmail@gmail.com' id="email" name="email" required />
                        </div>

                        <button type="submit" className="btn">Submit</button>
                    </form>

                    <div className="signup-link">
                        <p>Remember your password? <Link to="/">Sign In</Link></p> {/* Link to Sign In page */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recovery;
