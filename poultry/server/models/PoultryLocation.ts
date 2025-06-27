import mongoose from 'mongoose';

export interface IPoultryLocation extends mongoose.Document {
  farmer: mongoose.Types.ObjectId;
  name: string;
  address: string;
  coordinates: {
    type: string;
    coordinates: number[];
  };
  hensCount: number;
  averageWeight: number;
  pricePerKg: number;
  isAvailable: boolean;
}

const poultryLocationSchema = new mongoose.Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  hensCount: {
    type: Number,
    required: true,
    min: 0
  },
  averageWeight: {
    type: Number,
    required: true,
    min: 0
  },
  pricePerKg: {
    type: Number,
    required: true,
    min: 0
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  description: {
    type: String
  },
  images: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create a 2dsphere index for geospatial queries
poultryLocationSchema.index({ coordinates: '2dsphere' });

export default mongoose.model<IPoultryLocation>('PoultryLocation', poultryLocationSchema); 