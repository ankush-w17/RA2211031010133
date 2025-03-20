const PostCard = ({ post, commentsCount, userName }: { post: any; commentsCount: number; userName: string }) => (
    <div className="p-4 bg-white rounded shadow w-full mb-4">
      <h3 className="font-bold">{userName}</h3>
      <p>{post.content}</p>
      <p className="mt-2 text-sm text-gray-500">Comments: {commentsCount}</p>
    </div>
  );
  
  export default PostCard;
  