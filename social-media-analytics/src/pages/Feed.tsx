import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';

interface Post {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts();
      // Sort posts by timestamp in descending order
      const sortedPosts = data.sort(
        (a: Post, b: Post) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      setPosts(sortedPosts);
    };

    fetchData();

    // Set up a polling mechanism to fetch new posts every 30 seconds
    const intervalId = setInterval(fetchData, 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Feed</h1>
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <p className="text-gray-700">{post.content}</p>
          <p className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
