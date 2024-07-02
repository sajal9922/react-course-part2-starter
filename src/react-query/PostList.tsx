import usePosts from './hooks/usePosts';

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();
  if (isLoading) return <div className="spinner-border" role="status"></div>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
function usePost(): { data: any; error: any } {
  throw new Error('Function not implemented.');
}
