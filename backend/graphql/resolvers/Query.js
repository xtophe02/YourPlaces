const {users} = require('../../data')
const {places} = require('../../data')

exports.Query = {
  hello: () => "hello world",
  users: () => users,
  userPlaces: (parent, args, {user}, info) => places.filter(place=> place.creator === user.id)
};
