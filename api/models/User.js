import mongoose from "mongoose";
import bcrypt from "bcrypt";
export const CLIENT = "Client";
export const ADMINISTRATOR = "Administrator";
export const SELLER = "Seller";

export const ROLES = [CLIENT, ADMINISTRATOR, SELLER];

const schema = new mongoose.Schema({
  role: {
    type: String,
    enum: ROLES,
    default: CLIENT,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  location: {
    type: String,
  },
  numExterior: {
    type: Number,
  },
  numInterior: Number,
  streets: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  references: {
    type: String,
  },
  personalReferences: {
    type: String,
  },
  shoppingCart: { type: mongoose.Schema.Types.ObjectId, ref: "ShoppingCart" },
});

const User = mongoose.model("User", schema);

try {
  User.findOne({ email: "julio@correo.ith.mx" }, async (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      if (!docs) {
        const password = await bcrypt.hash("Wa*123456", 4);
        User.create({
          role: "Administrator",
          name: "Julio",
          lastName: "Flores",
          phone: "45-34",
          email: "julio@correo.ith.mx",
          password,
        });
      }
    }
  });
} catch (error) {
  console.log(error);
}

export default User;
