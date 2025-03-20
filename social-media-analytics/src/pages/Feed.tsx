// src/pages/Feed.tsx
import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/DataContext";

const Feed: React.FC = () => {
  const dataContext = useDataContext();
  const { posts, users } = dataContext!;
  const [sortedPosts, setSortedPosts] = useState(posts);

  useEffect(() => {
    // Sort posts newest first
    const sorted = [...posts].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    setSortedPosts(sorted);
  }, [posts]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Feed</h1>
      {sortedPosts.map((post) => (
        <div key={post.id} className="border rounded p-3 mb-3 shadow">
          <p className="font-semibold">{users[post.userId]}</p>
          <p>{post.content}</p>
          <p className="text-sm text-gray-600">{new Date(post.timestamp).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
