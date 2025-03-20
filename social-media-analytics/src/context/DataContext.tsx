// src/context/DataContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchUsers, fetchPosts, fetchComments } from "../services/api";

interface User {
  id: number;
  name: string;
}

interface Post {
  id: number;
  userId: number;
  content: string;
  timestamp: string;
}

interface Comment {
  id: number;
  postId: number;
  content: string;
}

interface DataContextType {
  users: Record<number, string>;
  posts: Post[];
  comments: Record<number, Comment[]>;
  loadComments: (postId: number) => void;
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<Record<number, string>>({});
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Record<number, Comment[]>>({});

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };

    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };

    loadUsers();
    loadPosts();
  }, []);

  const loadComments = async (postId: number) => {
    const fetchedComments = await fetchComments(postId);
    setComments((prev) => ({
      ...prev,
      [postId]: fetchedComments,
    }));
  };

  return (
    <DataContext.Provider value={{ users, posts, comments, loadComments }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
