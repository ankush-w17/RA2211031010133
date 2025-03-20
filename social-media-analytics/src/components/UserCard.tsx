interface UserCardProps {
    name: string;
    postCount: number;
    avatarUrl: string;
  }
  
  const UserCard: React.FC<UserCardProps> = ({ name, postCount, avatarUrl }) => (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{postCount} posts</p>
      </div>
    </div>
  );
  
  export default UserCard;
  