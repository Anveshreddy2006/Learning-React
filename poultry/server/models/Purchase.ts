import mongoose from 'mongoose';

export interface IPurchase extends mongoose.Document {
  buyer: mongoose.Types.ObjectId;
  location: mongoose.Types.ObjectId;
  quantity: number;
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'completed' | 'failed';
  paymentMethod: string;
  transactionId?: string;
}

const purchaseSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PoultryLocation',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    required: true
  },
  transactionId: {
    type: String
  }
}, {
  timestamps: true
});

export default mongoose.model<IPurchase>('Purchase', purchaseSchema); 