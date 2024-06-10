import Navbar from "../../Components/Navbar/Navbar";
import { useSearch } from "../../Hook/UseSearch";
import getCartData from "../../Hook/CartData";

import "./Cart.css";

export const Cart = () => {
  const { cartData, setCartData } = useSearch();
  return (
    <div>
      <Navbar data={cartData} setData={setCartData} getData={getCartData} />
      <div className="products">
        {cartData.map((item) => (
          <div className="card">
            <img src={item.avatar} alt="" /> <h3>{item.name}</h3>
            <h4>{item.price}$</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
