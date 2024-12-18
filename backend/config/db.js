// import mongoose from "mongoose";

//  export const connectDB = async () =>
// {
//     await mongoose.connect(' mongodb+srv://prajaktajadhav1512003:33858627@cluster0.vgxt3.mongodb.net/Fooddeliver').then(() => console.log("DB Connected"));
// }

import mongoose from 'mongoose';

const url = 'mongodb+srv://prajaktajadhav1512003:33858627@cluster0.vgxt3.mongodb.net/Fooddeliver';

export const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB Connected');
  } catch (error) {
    console.error('Connection Error:', error);
  }
}

