const UserCard = ({ name, count }: { name: string; count: number }) => (
    <div className="p-4 bg-white rounded shadow w-full text-center">
      <h3 className="font-bold">{name}</h3>
      <p>Posts: {count}</p>
    </div>
  );
  
  export default UserCard;
  