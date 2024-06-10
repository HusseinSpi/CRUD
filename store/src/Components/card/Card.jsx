import "./Card.css";

export const Card = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.avatar} alt={book.name} className="book-image" />
      <div className="book-details">
        <div className="title-price">
          <h1>{book.name}</h1>
          <p>$ {book.price}</p>
        </div>
        <p className="book-description">{book.desc}</p>
        <p>{book.comments}</p>
      </div>
    </div>
  );
};
