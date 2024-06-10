import { GetBookData } from "../../ap/GetBookData";
import { Card } from "../../Components/card/Card";

export const Home = () => {
  const { booksData, loading } = GetBookData();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="books-container">
      {booksData.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </section>
  );
};
