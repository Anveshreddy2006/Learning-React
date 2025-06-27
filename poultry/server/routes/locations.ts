import express from 'express';
import PoultryLocation from '../models/PoultryLocation';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// Get all locations (for buyers)
router.get('/', async (req, res) => {
  try {
    const { latitude, longitude, radius } = req.query;
    
    // TODO: Implement location-based search using coordinates
    const locations = await PoultryLocation.find({ isAvailable: true })
      .populate('farmer', 'name phone location');
    
    res.json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get farmer's locations
router.get('/my-locations', authenticateToken, async (req: any, res) => {
  try {
    const locations = await PoultryLocation.find({ farmer: req.user.userId });
    res.json(locations);
  } catch (error) {
    console.error('Error fetching farmer locations:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add new location (farmer only)
router.post('/', authenticateToken, async (req: any, res) => {
  try {
    const { name, address, coordinates, hensCount, averageWeight, pricePerKg } = req.body;

    const location = new PoultryLocation({
      farmer: req.user.userId,
      name,
      address,
      coordinates,
      hensCount,
      averageWeight,
      pricePerKg
    });

    await location.save();
    res.status(201).json(location);
  } catch (error) {
    console.error('Error adding location:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update location (farmer only)
router.put('/:id', authenticateToken, async (req: any, res) => {
  try {
    const { name, address, coordinates, hensCount, averageWeight, pricePerKg, isAvailable } = req.body;

    const location = await PoultryLocation.findOneAndUpdate(
      { _id: req.params.id, farmer: req.user.userId },
      {
        name,
        address,
        coordinates,
        hensCount,
        averageWeight,
        pricePerKg,
        isAvailable
      },
      { new: true }
    );

    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }

    res.json(location);
  } catch (error) {
    console.error('Error updating location:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete location (farmer only)
router.delete('/:id', authenticateToken, async (req: any, res) => {
  try {
    const location = await PoultryLocation.findOneAndDelete({
      _id: req.params.id,
      farmer: req.user.userId
    });

    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }

    res.json({ message: 'Location deleted successfully' });
  } catch (error) {
    console.error('Error deleting location:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 