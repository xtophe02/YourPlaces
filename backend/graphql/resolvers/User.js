const {users} = require('../../data')
const {places} = require('../../data')

exports.User = {
 
  places: async (parent, args, { UserModel, PlaceModel }, info) => {
    
    return await UserModel.find({ creator: user.id });
  },
  
 
};
