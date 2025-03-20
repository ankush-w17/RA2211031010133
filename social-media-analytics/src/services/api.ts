import axios from "axios";

const BASE_URL = "http://20.244.56.144/test";

export const fetchUsers = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data.users;
};

export const fetchPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data.posts;
};

export const fetchComments = async () => {
  const res = await axios.get(`${BASE_URL}/comments`);
  return res.data.comments;
};
