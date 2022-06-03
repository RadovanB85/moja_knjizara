import FormList from "../../components/form/formList";

import BookList from "../../components/books/bookList";
import { getAllBooks } from "../../data";
import classes from "./index.module.scss";

function SearchPage() {
  const books = getAllBooks();
  console.log(books);
  return (
    <div className={classes.search_wrapper}>
      {books.map((book) => {
        return null;
      })}
    </div>
  );
}

export default SearchPage;
