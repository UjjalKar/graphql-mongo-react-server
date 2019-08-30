const postReslovers = require("./posts"),
  usersResolvers = require("./users");

module.exports = {
  Query: {
    ...postReslovers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation
  }
};
