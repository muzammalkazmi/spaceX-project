const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./datasources/resolvers/resolver');
const LaunchAPI = require('./datasources/launch')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        launchAPI: new LaunchAPI(),

    })
});
server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/sandbox
    `);
});