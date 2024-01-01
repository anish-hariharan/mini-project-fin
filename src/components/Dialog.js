import "./Dialog.css";

const Dialog = ({ open, content, heading, onclose }) => {
  const handleCloseModel = () => {
    onclose();
  };

  return (
    <>
      {open && (
        <div className="dialogBackdrop">
          <div className="dialogContainer">
            <div className="dialogContent">
              <div>
                <strong>{heading || "Error"}</strong>
              </div>
            </div>
            <div className="dialogContent">
              <div>{content}</div>
            </div>
            <div className="dialogButton">
              <div>
                <button className="closeButton" onClick={handleCloseModel}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
