const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDef");
const resolvers = require("./graphql/resolvers");
const { MONGODB } = require("./config");
/**
 * part #1
 * https://www.youtube.com/channel/UC2-slOJImuSc20Drbf88qvg
 */
const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub })
});
/**
 * getting req.body as context
 * so we can verify the user
 * for protected routes
 */
mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  return server.listen({ port: 5000 }).then(res => {
    console.log(`Server running at ${res.url}`);
  });
});
