import express from 'express';
import { findNearbyLocations } from '../controllers/locationController';

const router = express.Router();

router.get('/nearby', findNearbyLocations);

export default router; 