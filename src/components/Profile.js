import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="container">
        <div className="card">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="container">
        <div className="card">
          <h2>Access Denied</h2>
          <p>You need to be logged in to view your profile.</p>
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-primary"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="profile-section">
        <div className="card">
          <div className="profile-info">
            {user?.picture && (
              <img 
                src={user.picture} 
                alt={user.name} 
                className="profile-avatar"
              />
            )}
            <h2>{user?.name}</h2>
            <p><strong>Email:</strong> {user?.email}</p>
            {user?.email_verified && (
              <p><strong>Email Verified:</strong> ✅ Yes</p>
            )}
            {user?.sub && (
              <p><strong>User ID:</strong> {user.sub}</p>
            )}
            {user?.updated_at && (
              <p><strong>Last Updated:</strong> {new Date(user.updated_at).toLocaleDateString()}</p>
            )}
          </div>
          
          <div style={{ marginTop: '30px' }}>
            <h3>User Information</h3>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '20px', 
              borderRadius: '8px',
              textAlign: 'left',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <pre style={{ 
                whiteSpace: 'pre-wrap', 
                wordBreak: 'break-word',
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 