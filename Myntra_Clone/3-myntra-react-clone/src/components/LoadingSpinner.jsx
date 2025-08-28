const LoadingSpinner = () => {
  return (
    <>
      <center className="load-margin">
        <button
          className="btn btn-primary"
          type="button"
          disabled
          style={{ width: "10rem", height: "4rem" }}
        >
          <span
            className="spinner-grow spinner-grow-sm"
            aria-hidden="true"
          ></span>
          <span role="status">Loading...</span>
        </button>
      </center>
    </>
  );
};

export default LoadingSpinner;
