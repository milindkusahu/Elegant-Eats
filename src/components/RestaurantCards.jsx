import { CDN_URL } from "../utils/constants";

const RestaurantCards = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId, locality } =
    resData?.info;
  const { slaString } = resData?.info?.sla;
  const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3 || {};
  const discountInfo = header && subHeader ? `${header} ${subHeader}` : "";

  return (
    <div className="res-card">
      <img
        className="res-image"
        loading="lazy"
        src={CDN_URL + cloudinaryImageId}
      />
      <p>{discountInfo}</p>
      <h2>{name}</h2>
      <hr />
      <h4>{/* <b>Preparation Time:</b> {prepTimeMinutes} */}</h4>
      <h4>{avgRating}</h4>
      <h4>
        <b>Cuisine:</b> {cuisines.join(", ")}
      </h4>
      <p>
        <b>Location:</b> {locality}
      </p>
    </div>
  );
};

export default RestaurantCards;
