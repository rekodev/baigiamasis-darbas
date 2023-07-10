import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  vardas: string;
  pavarde: string;
  elPastas: string;
  amzius: number;
}

const UserSchema: Schema = new Schema({
  vardas: { type: String, required: true },
  pavarde: { type: String, required: true },
  elPastas: { type: String, required: true },
  amzius: { type: Number, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);
