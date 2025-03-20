import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const fetchComments = async (postId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    return response.data.comments;
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    return [];
  }
};
