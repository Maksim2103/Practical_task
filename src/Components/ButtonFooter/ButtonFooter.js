const BodyFooter = ({ handleShowMe }) => {
  return (
    <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-primary " onClick={handleShowMe}>
        Show me
      </button>
    </div>
  );
};

export default BodyFooter;
