// src/services/api.ts
import axios from "axios";

const BASE_URL = "http://20.244.56.144/test";

// Fetch all users
export const fetchUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data.users;
};

// Fetch all posts
export const fetchPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data.posts;
};

// Fetch comments for a specific post
export const fetchComments = async (postId: number) => {
  const response = await axios.get(`${BASE_URL}/comments/${postId}`);
  return response.data.comments;
};
