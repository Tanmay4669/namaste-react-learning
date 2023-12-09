import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

//not using keys (not acceptable) <<<<<<<<  index as keys <<<<<< unique ids (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search m-4">Search</div>
      <div className="res-container flex flex-wrap">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
