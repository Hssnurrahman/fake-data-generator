import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./schema/index";

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port: 4000 });
