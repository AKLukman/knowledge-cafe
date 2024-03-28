import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
    console.log(bookMarks);
  };

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);
    // remove from book mark
    const remainingBookmark = bookMarks.filter((book) => book.id !== id);
    setBookMarks(remainingBookmark);
  };
  return (
    <div>
      <Header></Header>
      <div className="flex max-w-7xl mx-auto">
        <Blogs
          handleBookMark={handleBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>
    </div>
  );
}

export default App;
