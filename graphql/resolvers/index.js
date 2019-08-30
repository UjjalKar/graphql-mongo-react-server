const postReslovers = require("./posts"),
  usersResolvers = require("./users"),
  commentResolvers = require("./comments");

module.exports = {
  Post: {
    likeCount: parent => parent.likes.length,
    commentCount: parent => parent.comments.length
  },
  Posts: {
    likeCount: parent => parent.likes.length,
    commentCount: parent => parent.comments.length
  },
  Query: {
    ...postReslovers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postReslovers.Mutation,
    ...commentResolvers.Mutation
  },
  Subscription: {
    ...postReslovers.Subscription
  }
};
