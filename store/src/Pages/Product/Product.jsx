import "./Product.css";
export const Product = ( {book} ) => {
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
