import { useNavigate } from "react-router-dom";

function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/item/${post.id}`)}
    >
      <img
        src={`https://picsum.photos/200?random=${post.id}`}
        alt={post.title}
      />

      <h3>
        {post.title.length > 30
          ? post.title.slice(0, 30) + "..."
          : post.title}
      </h3>

      <p>
        {post.body.length > 70
          ? post.body.slice(0, 70) + "..."
          : post.body}
      </p>

      {post.body.length > 70 && (
        <span className="read-more">Read More...</span>
      )}
    </div>
  );
}

export default PostCard;