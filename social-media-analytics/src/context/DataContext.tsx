// src/context/DataContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchUsers, fetchPosts, fetchComments } from '../services/api';

interface DataContextProps {
  users: Record<string, string>;
  posts: any[];
  comments: any[];
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<Record<string, string>>({});
  const [posts, setPosts] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [usersData, postsData, commentsData] = await Promise.all([
        fetchUsers(),
        fetchPosts(),
        fetchComments(),
      ]);
      setUsers(usersData);
      setPosts(postsData);
      setComments(commentsData);
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ users, posts, comments }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
