import mongoose from 'mongoose';

const Orders = new mongoose.Schema(
  {
    id_order: { type: String, required: true, unique: true },
    customer: {
      company: { type: String, required: true },
      contact_person: { type: String, required: true },
    },
    item: {
      code: { type: String, required: true, unique: true },
      description: { type: String, required: true },
      currency: { type: String, required: true },
      total_value: { type: Number, required: true },
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model('Orders', Orders);
