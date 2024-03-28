import PropTypes from "prop-types";

const BookMark = ({ bookMark }) => {
  const { title } = bookMark;
  return (
    <div className="bg-slate-200 p-5 m-4 rounded-lg">
      <h3 className="text-3xl">{title}</h3>
    </div>
  );
};

BookMark.propTypes = {
  bookMark: PropTypes.object.isRequired,
};

export default BookMark;
