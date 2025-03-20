interface PostCardProps {
    content: string;
    author: string;
    commentCount: number;
    imageUrl: string;
    timestamp: string;
  }
  
  const PostCard: React.FC<PostCardProps> = ({
    content,
    author,
    commentCount,
    imageUrl,
    timestamp,
  }) => (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center space-x-4 mb-2">
        <img
          src={imageUrl}
          alt={`${author}'s post`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-md font-semibold">{author}</h3>
          <p className="text-gray-500 text-sm">{new Date(timestamp).toLocaleString()}</p>
        </div>
      </div>
      <p className="text-gray-800 mb-2">{content}</p>
      <p className="text-gray-600 text-sm">{commentCount} comments</p>
    </div>
  );
  
  export default PostCard;
  