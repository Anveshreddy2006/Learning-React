import { Request, Response } from 'express';
import PoultryLocation from '../models/PoultryLocation';

export const findNearbyLocations = async (req: Request, res: Response) => {
  try {
    const { latitude, longitude, maxDistance = 10000 } = req.query; // maxDistance in meters, default 10km

    if (!latitude || !longitude) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    const nearbyLocations = await PoultryLocation.find({
      coordinates: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude as string), parseFloat(latitude as string)]
          },
          $maxDistance: parseInt(maxDistance as string)
        }
      }
    }).populate('farmer', 'name phone');

    res.json(nearbyLocations);
  } catch (error) {
    console.error('Error finding nearby locations:', error);
    res.status(500).json({ message: 'Error finding nearby locations' });
  }
}; 