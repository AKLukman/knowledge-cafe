import PropTypes from "prop-types";
import { CiBookmarkCheck } from "react-icons/ci";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
    id,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full rounded-lg mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            className="ml-2 text-2xl text-red-600"
            onClick={() => handleBookMark(blog)}
          >
            <CiBookmarkCheck />
          </button>
        </div>
      </div>
      <h4 className="text-4xl font-bold mb-4">{title}</h4>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-purple-700 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
