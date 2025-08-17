import style from "../components/NoPostMessage.module.css";
const NoPostMessage = ({ onGetPostClick }) => {
  return (
    <>
      <center className={`${style.editheader}`}>
        <h2>No Post Available</h2>
        {/* <button type="button" className="btn btn-success" onClick={onGetPostClick}>
          Get Post From Server
        </button> */}
      </center>
    </>
  );
};

export default NoPostMessage;
