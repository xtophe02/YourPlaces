const {users} = require('../../data')
const {places} = require('../../data')

exports.User = {
 
  places: async (parent, args, { user, PlaceModel }, info) => {
    if (!user) {
      throw new Error("need to be authenticated");
    }
    return await PlaceModel.find({ creator: user.id });
  },
  
 
};
