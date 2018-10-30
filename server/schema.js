import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers.js';

const typeDefs = `
  type Home {
    address: String!
    city: String!
    zestimate: [Int]!
    beds: Int!
    baths: Float!
    sqFt: Int!
    status: String!
  }

  type Query {
    allHouses: [Home],
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;