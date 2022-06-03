import BookItem from "./bookItem";

function BookList(props) {
  const { books } = props;
  return (
    <ul>
      {books.map((book) => {
        return <BookItem key={book.ISBN} data={book} />;
      })}
    </ul>
  );
}

export default BookList;
