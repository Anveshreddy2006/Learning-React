import express from 'express';
import Purchase from '../models/Purchase';
import PoultryLocation from '../models/PoultryLocation';
import { authenticateToken, isBuyer } from '../middleware/auth';

const router = express.Router();

// Create new purchase
router.post('/', authenticateToken, isBuyer, async (req: any, res) => {
  try {
    const { locationId, quantity, paymentMethod } = req.body;

    // Get location details
    const location = await PoultryLocation.findById(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }

    if (!location.isAvailable) {
      return res.status(400).json({ message: 'Location is not available' });
    }

    if (location.hensCount < quantity) {
      return res.status(400).json({ message: 'Not enough hens available' });
    }

    // Calculate total amount
    const totalAmount = quantity * location.averageWeight * location.pricePerKg;

    // Create purchase
    const purchase = new Purchase({
      buyer: req.user.userId,
      location: locationId,
      quantity,
      totalAmount,
      paymentMethod
    });

    await purchase.save();

    // Update location's available hens count
    location.hensCount -= quantity;
    if (location.hensCount === 0) {
      location.isAvailable = false;
    }
    await location.save();

    res.status(201).json(purchase);
  } catch (error) {
    console.error('Error creating purchase:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get buyer's purchases
router.get('/my-purchases', authenticateToken, isBuyer, async (req: any, res) => {
  try {
    const purchases = await Purchase.find({ buyer: req.user.userId })
      .populate('location', 'name address');
    res.json(purchases);
  } catch (error) {
    console.error('Error fetching purchases:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update payment status
router.patch('/:id/payment', authenticateToken, isBuyer, async (req: any, res) => {
  try {
    const { paymentStatus, transactionId } = req.body;

    const purchase = await Purchase.findOneAndUpdate(
      { _id: req.params.id, buyer: req.user.userId },
      { paymentStatus, transactionId },
      { new: true }
    );

    if (!purchase) {
      return res.status(404).json({ message: 'Purchase not found' });
    }

    res.json(purchase);
  } catch (error) {
    console.error('Error updating payment status:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 