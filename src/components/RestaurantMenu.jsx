import useResturantMenu from "../Hooks/useResturantMenu";
import LoadingSkeleton from "./LoadingSkeleton";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_TYPE } from "../utils/constants";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <LoadingSkeleton />;

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    locality,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { slaString, lastMileTravelString } =
    resInfo?.data?.cards?.[2]?.card?.card?.info?.sla || {};

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.["@type"] === MENU_TYPE
    );

  if (!name || !cuisines) {
    return <div>No restaurant data available</div>;
  }

  return (
    <div className="main-menu-container">
      <div className="menu-container">
        <div className="res-detail">
          <div className="res-name flex gap-5">
            <img
              className="h-[120px] w-[120px] object-cover rounded-lg"
              src={CDN_URL + cloudinaryImageId}
              alt=""
            />
            <div className="mt-5">
              <h1>{name}</h1>
              <p>{cuisines.join(", ")}</p>
              <span>{locality}</span>
              <span>, {lastMileTravelString}</span>
            </div>
          </div>
          <div className="res-rating">
            <div className="star-rating">
              {avgRating >= 4 ? "⭐" : "⭐"}
              <p style={{ color: avgRating >= 4 ? "#00D26A" : "#C5C507" }}>
                {avgRating}
              </p>
            </div>
            <p>{totalRatingsString}</p>
          </div>
        </div>
        <div className="costs">
          <p> ₹ {slaString}</p>
          <p> ₹ {costForTwoMessage}</p>
        </div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            onClick={() => setShowIndex(index === showIndex ? false : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
