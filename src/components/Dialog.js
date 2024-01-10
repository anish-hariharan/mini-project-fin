import "./Dialog.css";

const Dialog = ({ open, content, heading, onclose, children, onSubmit }) => {
  const handleCloseModel = () => {
    onclose();
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <>
      {open && (
        <div className="dialogBackdrop">
          <div
            className="dialogContainer"
            style={{ ...(!children && { height: "30%" }) }}
          >
            <div className="dialogContent">
              <div>
                <strong>{heading || "Error"}</strong>
              </div>
            </div>
            {children ? (
              children
            ) : (
              <div className="dialogContent">
                <div>{content}</div>
              </div>
            )}
            <div className="dialogButton">
              <div>
                <button className="closeButton" onClick={handleCloseModel}>
                  Close
                </button>

                {children && (
                  <button
                    className="closeButton"
                    onClick={handleSubmit}
                    style={{ margin: "25px" }}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
