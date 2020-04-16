const { users } = require("../../data");
const { places } = require("../../data");

exports.Place = {
  creator: (parent, args, ctx, info) =>
    users.find((user) => user.id === parent.creator),
  coordinates: (parent, args, ctx, info) => places.filter((place) => place.id === parent.id).map(item=> item.location)[0],
 
 
};
