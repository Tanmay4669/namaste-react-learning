import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card m-4 bg-slate-200 w-52 h-auto cursor-pointer hover:border-black hover:border-2">
      <div className="flex justify-center pt-4">
        <img src={CDN_URL + cloudinaryImageId} className=" w-44 h-44 " />
      </div>

      <div className="pl-4 pt-4 pb-4">
        <h3 className=" font-semibold">{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating} stars</h3>
        <h3>{costForTwo}</h3>
        <h3>{sla.deliveryTime} minutes</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
