import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    console.log("Menu Json: ", json);

    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <>
      <div className="menu p-8">
        <h1 className=" text-2xl p-1 font-semibold">{name}</h1>
        <h1 className=" text-2xl p-1 font-semibold">Restaurant Id: {resId}</h1>
        <h2>
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
        <h2 className="text-xl p-2 font-semibold">Menu</h2>
        <ul className=" list-item list-disc">
          {itemCards?.map((item) => (
            <li className=" list-item p-2" key={item.card.info.id}>
              {item.card.info.name} {"  -   Rs. "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
