import SearchItem from "./searchitem";
import classes from "./searchitemslist.module.scss";

function SearchItemsList(props) {
  const { books } = props;
  return (
    <ul>
      {books.map((book) => {
        return <SearchItem key={book.ISBN} data={book} />;
      })}
    </ul>
  );
}

export default SearchItemsList;
