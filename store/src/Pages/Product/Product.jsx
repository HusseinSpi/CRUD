import "./Product.css";
export const Product = () => {
  const book = {
    price: 10.99,
    name: "Sirens & Muses",
    avatar:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635699132i/59336344.jpg",
    desc: "Sirens & Muses explores the intertwined lives of four art students at an elite university, delving into themes of creativity, ambition, and the complexities of personal relationships.",
    comments: [],
    id: 1,
  };

  return (
    <div className="container">
      <div>
        <img src={book.avatar}></img>
        <p className="desc">{book.desc}</p>
        <h1>Comments:{book.comments}</h1>
      </div>

      <div className="index">
        <h1 className="title">{book.name} </h1>
        <h4 className="price">Price: $ {book.price}</h4>
        <button className="btn">Add to Favorite</button>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};
