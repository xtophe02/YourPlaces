const bcrypt = require("bcryptjs");
const mongoose = require('mongoose')
const hashPassword = require("../../utils/hashPassword");
const generateToken = require("../../utils/generateToken");
const getCoordsForAddress = require('../../utils/coordinates')

exports.Mutation = {
  createUser: async (parent, { data }, { UserModel }) => {
    const user = await UserModel.findOne({ email: data.email });

    if (user) {
      throw new Error("Email in use");
    }
    const hashedPassword = await hashPassword(data.password);

    const newUser = new UserModel({ ...data, password: hashedPassword });

    try {
      const user = await newUser.save();
      return { token: generateToken(user) };
    } catch (err) {
      throw new Error(err);
    }
  },
  login: async (parent, { data }, { UserModel }) => {
    const {email,password} = data
    const user = await UserModel.findOne({email});

    if (!user) {
      throw new Error("Unable to login");
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Unable to login");
    }

    return { token: generateToken(user) };
  },
  createPlace: async (parent, {data}, {user,PlaceModel,UserModel})=>{
    if(!user){
      throw new Error('need to be authenticated')
    }
    const dbUser = await UserModel.findById(user.id)

    
    
    try {
      const session = await mongoose.startSession()
      session.startTransaction()
      const coordinates = await getCoordsForAddress(data.address)
      const place = new PlaceModel({ ...data, creator: user.id, coordinates});
      const result = await place.save({session})
      dbUser.places.push(place)
      await dbUser.save({session})
      await session.commitTransaction()
      return result
    } catch (error) {
      console.log(error)
    }
  }
};
