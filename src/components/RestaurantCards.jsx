const RestaurantCards = ({ restaurant }) => {
  const { image, name, prepTimeMinutes, cuisine } = restaurant;

  return (
    <div className="res-card">
      <img className="res-image" src={image} />
      <h2>{name}</h2>
      <hr />
      <h4>
        <b>Preparation Time:</b> {prepTimeMinutes}
      </h4>
      <h4>
        <b>Cuisine:</b> {cuisine}
      </h4>
    </div>
  );
};

export default RestaurantCards;
