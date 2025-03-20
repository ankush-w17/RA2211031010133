import { useData } from "../context/DataContext";
import UserCard from "../components/UserCard";

const TopUsers = () => {
  const data = useData();
  if (!data) return null;

  const userPostCount: Record<string, number> = {};
  data.posts.forEach(post => {
    userPostCount[post.userId] = (userPostCount[post.userId] || 0) + 1;
  });

  const topUsers = Object.entries(userPostCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {topUsers.map(([userId, count]) => (
        <UserCard key={userId} name={data.users[userId]} count={count} />
      ))}
    </div>
  );
};

export default TopUsers;
