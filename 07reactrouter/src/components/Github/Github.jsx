import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/anveshreddy2006')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <div>
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </div>
  );
}

export default Github;
