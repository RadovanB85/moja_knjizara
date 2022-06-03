import BookList from "../components/books/bookList";
import { getAllBooks } from "../data";
import classes from "./index.module.scss";

export default function Home() {
  const allBooks = getAllBooks();
  return (
    <div className={classes.home_wrapper}>
      <div className={classes.home_container}>
        <h2>Welcome to My Lybrary</h2>
      </div>
      <div className={classes.home_items_container}>
        <BookList books={allBooks} />
      </div>
    </div>
  );
}
