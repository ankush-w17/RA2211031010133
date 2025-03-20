import { useData } from "../context/DataContext";
import PostCard from "../components/PostCard";

const Feed = () => {
  const data = useData();
  if (!data) return null;

  const commentCount: Record<string, number> = {};
  data.comments.forEach(comment => {
    commentCount[comment.postId] = (commentCount[comment.postId] || 0) + 1;
  });

  const sortedPosts = [...data.posts].sort((a, b) => b.id - a.id); // Newest first

  return (
    <div className="p-4">
      {sortedPosts.map(post => (
        <PostCard key={post.id} post={post} commentsCount={commentCount[post.id] || 0} userName={data.users[post.userId]} />
      ))}
    </div>
  );
};

export default Feed;
