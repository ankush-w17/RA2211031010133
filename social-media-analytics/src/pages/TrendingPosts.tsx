import { useData } from "../context/DataContext";
import PostCard from "../components/PostCard";

const TrendingPosts = () => {
  const data = useData();
  if (!data) return null;

  const commentCount: Record<string, number> = {};
  data.comments.forEach(comment => {
    commentCount[comment.postId] = (commentCount[comment.postId] || 0) + 1;
  });

  const maxCount = Math.max(...Object.values(commentCount));
  const trendingPosts = data.posts.filter(post => commentCount[post.id] === maxCount);

  return (
    <div className="p-4">
      {trendingPosts.map(post => (
        <PostCard key={post.id} post={post} commentsCount={commentCount[post.id]} userName={data.users[post.userId]} />
      ))}
    </div>
  );
};

export default TrendingPosts;
