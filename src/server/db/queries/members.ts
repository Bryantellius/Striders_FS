import { Query } from "../models";

// Returns user info
export const getUserDetails = async (id: number) => {
  return Query(`CALL spUserDetails(?)`, [id]);
};

// Returns all members not followed by user
export const getSuggestedUsers = async (id: number) => {
  return Query(`CALL spSuggestedUsers(?)`, [id]);
};

// Adds an object to the social table
export const addUser = async (body: any) => {
  return Query(`INSERT INTO social SET ?`, [body]);
};

// Removes an object from the social table
export const removeUser = async (body: any) => {
  return Query(`DELETE from social WHERE userid = ? AND following_userid = ?`, [
    body.userid,
    body.following_userid,
  ]);
};

// Returns all members that a user follows
export const followedUsers = async (id: number) => {
  return Query(
    `SELECT u.id FROM users u JOIN social s ON s.following_userid = u.id WHERE s.userid = ?`,
    [id]
  );
};

// Returns a search results for users
export const searchResults = async (name: string) => {
  return Query(
    `SELECT u.id, u.firstname, u.lastname FROM users u WHERE u.firstname LIKE ? OR u.lastname LIKE ?`,
    [`%${name}%`, `%${name}%`]
  );
};

// Returns an array of all users for search RN
export const allUsers = async () => {
  return Query("SELECT id, firstname, lastname FROM users");
};

export default {
  getUserDetails,
  getSuggestedUsers,
  addUser,
  removeUser,
  followedUsers,
  searchResults,
  allUsers,
};
