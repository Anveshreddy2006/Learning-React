import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();

  return (
    <div>
      <h2 className='bg-gray-700 text-white text-3xl p-3'>User ID: {userid}</h2>
    </div>
  );
}

export default User;
