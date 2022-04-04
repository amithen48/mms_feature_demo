import "./Card.css";

function OutputCard(props) {
  return (
    <div className="Card">
      <p>OUTPUT</p>
      <div className="field">
        <pre>{JSON.stringify(props.outputData, null, " ")}</pre>
      </div>
    </div>
  );
}

export default OutputCard;
