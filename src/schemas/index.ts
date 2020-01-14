import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "root",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        }
      }
    }
  })
});

export default schema;
