const { places } = require("../../data");

exports.Place = {
  creator: async (parent, args, { user, UserModel }, info) => {
    if (!user) {
      throw new Error("need to be authenticated");
    }
    const { id } = user;
    return await UserModel.findById(id);
  },

  coordinates: (parent, args, ctx, info) =>
    places
      .filter((place) => place.id === parent.id)
      .map((item) => item.location)[0],
};
