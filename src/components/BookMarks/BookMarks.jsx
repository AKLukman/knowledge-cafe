import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-[#6047ECA1] p-5 m-4 rounded-lg">
        <h2 className="text-2xl py-5 px-12 text-[#6047EC] font-bold">
          Spent time on read: {readingTime} min
        </h2>
      </div>
      <h2 className="text-2xl p-5 m-5">Bookmarked Blogs: {bookMarks.length}</h2>
      {bookMarks.map((bookMark, idx) => (
        <BookMark key={idx} bookMark={bookMark}></BookMark>
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default BookMarks;
