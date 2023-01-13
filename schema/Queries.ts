import lodash from "lodash";
import { prisma } from "../prisma/prismaClient";
import { AppArgs } from "../types/types";
import { selectedData } from "../functions/selectedFields";
import fs from "fs";

export const getAllUsers = async (
  parent: any,
  { limit, download, filePath, selectedFields }: AppArgs
) => {
  try {
    if (limit > 1000) throw new Error("Limit must be less than 1000.");

    const users =
      selectedFields.length === 0 || selectedFields.includes("all")
        ? await prisma.user.findMany()
        : await prisma.user.findMany({
            select: {
              id: selectedData(selectedFields, "id"),
              user_name: selectedData(selectedFields, "user_name"),
              name: selectedData(selectedFields, "name"),
              email: selectedData(selectedFields, "email"),
              age: selectedData(selectedFields, "age"),
              city: selectedData(selectedFields, "city"),
              country: selectedData(selectedFields, "country"),
              date_of_birth: selectedData(selectedFields, "date_of_birth"),
              gender: selectedData(selectedFields, "gender"),
            },
          });

    if (!users) throw new Error("Users must not be null");

    const shuffledUsers = lodash.shuffle(users);

    const limitedUsers = shuffledUsers.slice(0, limit);

    if (!!download && !!filePath) {
      fs.writeFile(
        `${filePath}/users.json`,
        JSON.stringify(limitedUsers),
        function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("The file was saved!");
        }
      );
      return limitedUsers;
    }

    return limitedUsers;
  } catch (error) {
    throw error;
  }
};
