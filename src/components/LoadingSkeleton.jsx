const LoadingSkeleton = () => {
  return (
    <div className="res-card skeleton">
      <div className="res-image skeleton"></div>
      <div style={{ padding: "1rem" }}>
        <div
          className="skeleton"
          style={{ height: "24px", marginBottom: "1rem" }}
        ></div>
        <div
          className="skeleton"
          style={{ height: "16px", width: "60%", marginBottom: "0.5rem" }}
        ></div>
        <div
          className="skeleton"
          style={{ height: "16px", width: "40%" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
