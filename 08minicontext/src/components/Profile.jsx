// Profile.jsx
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <h3>Welcome, {user.username}!</h3>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
}

export default Profile; // ✅ THIS IS IMPORTANT
