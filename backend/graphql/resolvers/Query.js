// const { UserInputError } = require("apollo-server-express");
const { users } = require("../../data");
const { places } = require("../../data");

exports.Query = {
  hello: () => "hello world",
  users: () => users,
  userPlaces: (parent, args, { user }, info) =>
    places.filter((place) => place.creator === user.id),
  place: (parent, args, ctx, info) => {
    const place = places.find((place) => place.id === args.id);
    if (!place) {
      // throw new UserInputError("Place not found", {
      //   invalidArgs: Object.keys(args),
      // });
      throw new Error('place not found')
    }
    return place;
  },
};
