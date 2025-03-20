import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchComments } from '../services/api';

interface Post {
  id: string;
  userId: string;
  content: string;
}

interface PostWithComments extends Post {
  commentCount: number;
}

const TrendingPosts: React.FC = () => {
  const [trendingPosts, setTrendingPosts] = useState<PostWithComments[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await fetchPosts();
      const postsWithComments = await Promise.all(
        posts.map(async (post: Post) => {
          const comments = await fetchComments(post.id);
          return { ...post, commentCount: comments.length };
        })
      );
      // Find the maximum comment count
      const maxComments = Math.max(...postsWithComments.map((post) => post.commentCount));
      // Filter posts that have the maximum comment count
      const trending = postsWithComments.filter((post) => post.commentCount === maxComments);
      setTrendingPosts(trending);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
      {trendingPosts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <p className="text-gray-700">{post.content}</p>
          <p className="text-gray-500 text-sm">Comments: {post.commentCount}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
