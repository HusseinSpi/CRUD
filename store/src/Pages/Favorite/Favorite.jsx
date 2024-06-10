import Navbar from "../../Components/Navbar/Navbar";
import { useSearch } from "../../Hook/UseSearch";
import getFavoriteData from "../../Hook/FavoriteData";
import "./Favorite.css";

export const Favorite = () => {
  const { favoriteData, setFavoriteData } = useSearch();
  return (
    <div>
      <Navbar
        data={favoriteData}
        setData={setFavoriteData}
        getData={getFavoriteData}
      />
      <div className="products">
        {favoriteData.map((item) => (
          <div className="card">
            <img src={item.avatar} alt="" /> <h3>{item.name}</h3>
            <h4>{item.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
