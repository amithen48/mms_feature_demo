import { useState, useEffect } from "react";
import "./Card.css";

function InputCard(props) {
  const [inputData, changeInputData] = useState("");

  useEffect(() => {
    props.sendDataToParent(inputData);
  });

  return (
    <div className="Card">
      <p>INPUT</p>
      <textarea
        value={inputData}
        onChange={(event) => {
          changeInputData(event.target.value);
        }}
        className="field"
      ></textarea>
    </div>
  );
}

export default InputCard;
