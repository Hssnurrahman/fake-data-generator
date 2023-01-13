import { getAllUsers } from "./Queries";

export const resolvers = {
  Query: {
    getAllUsers: getAllUsers,
  },
};
