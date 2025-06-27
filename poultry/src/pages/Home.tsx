import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome to Poultry Marketplace</h1>
      <p>Connect farmers with buyers in your area</p>
      
      <div className="features">
        <div className="feature">
          <h2>For Farmers</h2>
          <p>List your poultry locations and inventory</p>
          <Link to="/register">
            <button>Register as Farmer</button>
          </Link>
        </div>
        
        <div className="feature">
          <h2>For Buyers</h2>
          <p>Find and purchase poultry from nearby locations</p>
          <Link to="/register">
            <button>Register as Buyer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 