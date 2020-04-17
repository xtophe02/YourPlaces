const hashPassword = require('../../utils/hashPassword')
const generateToken = require('../../utils/generateToken')

exports.Mutation = {
  createUser: async (parent, {data}, {UserModel})=>{
    // const { email, password, name, imageUrl } = data;
    
    // console.log(password)
    const user = await UserModel.findOne({ email: data.email });

    if (user) {
      throw new Error("Email in use");
    }
    const hashedPassword = await hashPassword(data.password);

    const newUser = new UserModel({ ...data, password: hashedPassword });
    
    try {
      const user = await newUser.save();
      return {token:generateToken(user)}
      
    } catch (err) {
      throw new Error(err);
    }
  }
};
