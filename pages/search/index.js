import FormList from "../../components/form/formList";
import { getAllBooks } from "../../data";

import BookList from "../../components/books/bookList";

import classes from "./index.module.scss";
import LayerSection from "../../components/layer/layer";

function SearchPage() {
  const allBooks = getAllBooks();
  console.log(allBooks);

  return (
    <div className={classes.search_wrapper}>
      <h2 className="headline">Pretrazivanje</h2>
      <div className={classes.search_form_wrapper}>
        <FormList data={allBooks} />
      </div>
      <div className={classes.layer}>
        <LayerSection />
      </div>
      <div className={classes.books_wrapper}>
        <BookList books={allBooks} />
      </div>
    </div>
  );
}

export default SearchPage;
