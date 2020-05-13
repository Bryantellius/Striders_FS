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

export default {
  getUserDetails,
  getSuggestedUsers,
  addUser,
  removeUser,
  followedUsers,
};
