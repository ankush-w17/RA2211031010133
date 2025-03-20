import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUsers, fetchPosts, fetchComments } from "../services/api";

interface DataContextProps {
  users: Record<string, string>;
  posts: any[];
  comments: any[];
}

const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<Record<string, string>>({});
  const [posts, setPosts] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);

  const loadData = async () => {
    const [u, p, c] = await Promise.all([fetchUsers(), fetchPosts(), fetchComments()]);
    setUsers(u);
    setPosts(p);
    setComments(c);
  };

  useEffect(() => {
    loadData();

    // Polling for feed updates every 30s
    const interval = setInterval(() => {
      fetchPosts().then(setPosts);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DataContext.Provider value={{ users, posts, comments }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
