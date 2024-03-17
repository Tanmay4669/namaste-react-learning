import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log(resData);

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="res-card m-4 bg-slate-200 w-[250px] h-auto cursor-pointer hover:border-black hover:bg-slate-300 rounded-lg shadow-lg"
    >
      <div className="flex justify-center pt-4">
        <img
          src={CDN_URL + cloudinaryImageId}
          className=" w-52 h-52 rounded-lg "
        />
      </div>

      <div className="pl-4 pb-4">
        <h3 className=" font-bold py-4 text-lg">{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating} stars</h3>
        <h3>{costForTwo}</h3>
        <h3>{sla.deliveryTime} minutes</h3>
      </div>
    </div>
  );
};

//Higher Order Components

//input - RestaurantCard
//output - RestaurantCardPromoted (Enhancement of Restaurant Card)

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
