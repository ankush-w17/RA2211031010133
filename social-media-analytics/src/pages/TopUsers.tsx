// src/pages/TopUsers.tsx
import React from 'react';
import { useData } from '../context/DataContext';

const TopUsers: React.FC = () => {
  const { users, posts } = useData();

  const userPostCounts: Record<string, number> = posts.reduce((acc, post) => {
    acc[post.user_id] = (acc[post.user_id] || 0) + 1;
    return acc;
  }, {});

  const topUsers = Object.entries(userPostCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([userId]) => ({
      id: userId,
      name: users[userId],
      postCount: userPostCounts[userId],
    }));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top 5 Users by Number of Posts</h1>
      <ul>
        {topUsers.map(user => (
          <li key={user.id} className="mb-2">
            <span className="font-semibold">{user.name}</span> - {user.postCount} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
