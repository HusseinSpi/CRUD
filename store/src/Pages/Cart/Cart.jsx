import Navbar from "../../Components/Navbar/Navbar";
import { useSearch } from "../../Hook/UseSearch";
import getCartData from "../../Hook/CartData";
import productLogic from "../../Hook/UseProductLogic";

import "./Cart.css";

export const Cart = () => {
  const { openProduct } = productLogic();
  const { cartData, setCartData } = useSearch();
  return (
    <div>
      <Navbar data={cartData} setData={setCartData} getData={getCartData} />
      <div className="products">
        {cartData.map((item) => (
          <div className="card" onClick={() => openProduct(item)}>
            <img src={item.avatar} alt="" /> <h3>{item.name}</h3>
            <h4>{item.price}$</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
