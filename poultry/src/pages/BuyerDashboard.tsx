import React, { useState } from 'react';

interface PoultryLocation {
  id: string;
  name: string;
  address: string;
  distance: number;
  hensCount: number;
  averageWeight: number;
  pricePerKg: number;
}

const BuyerDashboard: React.FC = () => {
  const [searchRadius, setSearchRadius] = useState<number>(10);
  const [locations, setLocations] = useState<PoultryLocation[]>([
    // Sample data - in real app, this would come from an API
    {
      id: '1',
      name: 'Green Valley Poultry',
      address: '123 Farm Road, Rural County',
      distance: 5.2,
      hensCount: 500,
      averageWeight: 2.5,
      pricePerKg: 150
    },
    {
      id: '2',
      name: 'Sunrise Farms',
      address: '456 Country Lane, Farmville',
      distance: 8.7,
      hensCount: 300,
      averageWeight: 2.3,
      pricePerKg: 145
    }
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search logic with API call
    console.log('Searching for locations within', searchRadius, 'km');
  };

  const handlePurchase = (locationId: string) => {
    // TODO: Implement purchase logic
    console.log('Initiating purchase for location:', locationId);
  };

  return (
    <div className="container">
      <h1>Buyer Dashboard</h1>
      
      <div className="search-section">
        <h2>Find Nearby Poultry Locations</h2>
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="searchRadius">Search Radius (km):</label>
            <input
              type="number"
              id="searchRadius"
              value={searchRadius}
              onChange={(e) => setSearchRadius(Number(e.target.value))}
              min="1"
              max="100"
              required
            />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="locations-list">
        <h2>Available Poultry Locations</h2>
        {locations.length === 0 ? (
          <p>No locations found within your search radius</p>
        ) : (
          <div className="location-cards">
            {locations.map(location => (
              <div key={location.id} className="location-card">
                <h3>{location.name}</h3>
                <p>Address: {location.address}</p>
                <p>Distance: {location.distance} km</p>
                <p>Available Hens: {location.hensCount}</p>
                <p>Average Weight: {location.averageWeight} kg</p>
                <p>Price per kg: ₹{location.pricePerKg}</p>
                <button onClick={() => handlePurchase(location.id)}>
                  Purchase
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyerDashboard; 