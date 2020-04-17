const {users} = require('../../data')
const {places} = require('../../data')

exports.User = {
 
  places: (parent, args, ctx, info) => places.filter(place => parent.id === place.creator)
  
 
};
