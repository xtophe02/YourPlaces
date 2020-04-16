const {users} = require('../../data')
const {places} = require('../../data')

exports.User = {
 
  places: (parent, args, ctx, info) => places.map(place => parent.id === place.creator)
 
};
