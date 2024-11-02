const Button = ({ topRestaurants, text }) => {
  return (
    <div>
      <button className="btn" onClick={() => topRestaurants()}>
        {text}
      </button>
    </div>
  );
};

export default Button;
