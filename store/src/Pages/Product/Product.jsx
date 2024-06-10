import "./Product.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getAllData from "../../Hook/getAllData";
import productLogic from "../../Hook/UseProductLogic";
export const Product = () => {
  const { addToFavorite } = productLogic();
  const [books, setBooks] = useState([]);
  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllData();
      console.log(response);
      setBooks(response);
    };

    fetchData();
  }, []);
  const book = books.find((book) => book.id === Number(productId));
  console.log(book);

  return (
    <div className="container">
      {book == undefined ? (
        <div></div>
      ) : (
        <div>
          <div>
            <img src={book.avatar}></img>
            <p className="desc">{book.desc}</p>
          </div>

          <div className="index">
            <h1 className="title">{book.name} </h1>
            <h4 className="price">Price: $ {book.price}</h4>
            <button className="btn" onClick={addToFavorite}>
              Add to Favorite
            </button>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};
