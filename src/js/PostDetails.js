import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function PostDetails() {
  const { id } = useParams();

  const { posts } = useSelector((state) => state);

  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return <h2>Post Not Found</h2>;
  }

  return (
    <div className="details">
      <img
        src={`https://picsum.photos/400?random=${post.id}`}
        alt={post.title}
      />

      <h1>{post.title}</h1>

      <p>{post.body}</p>

      <h3>User ID: {post.userId}</h3>

      <Link to="/">← Back</Link>
    </div>
  );
}

export default PostDetails;