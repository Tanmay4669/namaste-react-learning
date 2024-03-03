import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full h-auto"
            />
            <div className="flex justify-center -mt-4">
              <button className="p-2 flex items-center justify-center w-1/2 rounded-lg bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
