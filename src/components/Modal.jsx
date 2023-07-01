export default function PopUp({ children, setCloseModal, status , buttonText}) {
  if (!status)
    return (
      <div
        className="outer"
        onClick={(e) => {
          setCloseModal(true);
        }}
      >
        <div
          className="middle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="inner">
            <h3>{buttonText}</h3>
            <div> {children}</div>
            <button
              onClick={(e) => {
                setCloseModal(true);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  else
    return (
      <>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCloseModal(false);
          }}
        >
          {buttonText}
        </button>
      </>
    );
}
