import { GetBookData } from "../../ap/GetBookData";
import { Card } from "../../Components/card/Card";
import Navbar from "../../Components/Navbar/Navbar";

export const Home = () => {
  const { booksData, loading } = GetBookData();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <section className="books-container">
        {booksData.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </section>
    </>
  );
};
