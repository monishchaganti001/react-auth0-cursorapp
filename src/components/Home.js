import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      <div className="hero">
        <div className="container">
          <h1>Welcome to React Auth0 App</h1>
          <p>A modern React application with Auth0 authentication</p>
          
          {isAuthenticated ? (
            <div>
              <p>Welcome back, {user?.name}!</p>
              <Link to="/profile" className="btn btn-primary">
                View Profile
              </Link>
            </div>
          ) : (
            <div>
              <p>Please log in to access your profile</p>
              <p>This app demonstrates secure authentication with Auth0</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="container">
        <div className="card">
          <h2>Features</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>✅ Secure authentication with Auth0</li>
            <li style={{ marginBottom: '10px' }}>✅ User profile management</li>
            <li style={{ marginBottom: '10px' }}>✅ Modern React with hooks</li>
            <li style={{ marginBottom: '10px' }}>✅ Responsive design</li>
            <li style={{ marginBottom: '10px' }}>✅ Clean and intuitive UI</li>
          </ul>
        </div>
        
        <div className="card">
          <h2>Getting Started</h2>
          <p>To use this app with Auth0:</p>
          <ol style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
            <li style={{ marginBottom: '10px' }}>Create an Auth0 account and application</li>
            <li style={{ marginBottom: '10px' }}>Set up your Auth0 domain and client ID</li>
            <li style={{ marginBottom: '10px' }}>Configure your environment variables</li>
            <li style={{ marginBottom: '10px' }}>Run the application with <code>npm start</code></li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home; 