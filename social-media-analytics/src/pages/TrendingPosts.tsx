// src/pages/TrendingPosts.tsx
import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/DataContext";

const TrendingPosts: React.FC = () => {
  const dataContext = useDataContext();
  const { posts, comments, loadComments } = dataContext!;
  const [maxCommentCount, setMaxCommentCount] = useState(0);

  useEffect(() => {
    posts.forEach((post) => {
      loadComments(post.id);
    });
  }, [posts]);

  useEffect(() => {
    const counts = Object.values(comments).map((c) => c.length);
    const maxCount = Math.max(...counts, 0);
    setMaxCommentCount(maxCount);
  }, [comments]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Trending Posts</h1>
      {posts.map((post) => (
        comments[post.id] && comments[post.id].length === maxCommentCount && (
          <div key={post.id} className="border rounded p-3 mb-3 shadow">
            <p className="font-semibold">{post.content}</p>
            <p className="text-sm text-gray-600">Comments: {comments[post.id].length}</p>
          </div>
        )
      ))}
    </div>
  );
};

export default TrendingPosts;
