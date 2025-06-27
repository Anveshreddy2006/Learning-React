import React, { useState } from 'react';

interface PoultryLocation {
  id: string;
  name: string;
  address: string;
  hensCount: number;
  averageWeight: number;
}

const FarmerDashboard: React.FC = () => {
  const [locations, setLocations] = useState<PoultryLocation[]>([]);
  const [newLocation, setNewLocation] = useState({
    name: '',
    address: '',
    hensCount: 0,
    averageWeight: 0
  });

  const handleAddLocation = (e: React.FormEvent) => {
    e.preventDefault();
    const location: PoultryLocation = {
      id: Date.now().toString(),
      ...newLocation
    };
    setLocations([...locations, location]);
    setNewLocation({
      name: '',
      address: '',
      hensCount: 0,
      averageWeight: 0
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewLocation(prev => ({
      ...prev,
      [name]: name === 'hensCount' || name === 'averageWeight' ? Number(value) : value
    }));
  };

  return (
    <div className="container">
      <h1>Farmer Dashboard</h1>
      
      <div className="add-location">
        <h2>Add New Poultry Location</h2>
        <form onSubmit={handleAddLocation}>
          <div className="form-group">
            <label htmlFor="name">Location Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newLocation.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={newLocation.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hensCount">Number of Hens:</label>
            <input
              type="number"
              id="hensCount"
              name="hensCount"
              value={newLocation.hensCount}
              onChange={handleInputChange}
              required
              min="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="averageWeight">Average Weight (kg):</label>
            <input
              type="number"
              id="averageWeight"
              name="averageWeight"
              value={newLocation.averageWeight}
              onChange={handleInputChange}
              required
              min="0"
              step="0.1"
            />
          </div>

          <button type="submit">Add Location</button>
        </form>
      </div>

      <div className="locations-list">
        <h2>Your Poultry Locations</h2>
        {locations.length === 0 ? (
          <p>No locations added yet</p>
        ) : (
          <div className="location-cards">
            {locations.map(location => (
              <div key={location.id} className="location-card">
                <h3>{location.name}</h3>
                <p>Address: {location.address}</p>
                <p>Number of Hens: {location.hensCount}</p>
                <p>Average Weight: {location.averageWeight} kg</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerDashboard; 