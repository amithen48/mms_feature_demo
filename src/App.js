import "./App.css";

import { useState, useEffect } from "react";
import InputCard from "./Components/Card/InputCard";
import OutputCard from "./Components/Card/OutputCard";
import APIService from "./Components/APIService";

function App() {
  const [dataToSend, changeDataToSend] = useState("");
  const [outputData, changeOutputData] = useState();
  const [requestType, changeRequestType] = useState("to_stix");

  const sendData = (data) => {
    changeOutputData(data);
  };

  const pullData = (data) => {
    changeDataToSend(data);
  };

  const GenerateStixHandler = () => {
    APIService.sendData = sendData;
    APIService.requestType = requestType;
    APIService.InsertData(dataToSend);
  };

  const ChangeRequestHandler = () => {
    if (requestType === "to_stix") changeRequestType("from_stix");
    else changeRequestType("to_stix");
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="header">{requestType}</div>
          <button onClick={() => ChangeRequestHandler()}>
            change request type
          </button>
          <div className="input-output-div">
            <InputCard sendDataToParent={pullData} />
            <OutputCard outputData={outputData} />
          </div>
          <div>
            <button onClick={() => GenerateStixHandler()}>
              Generate Output
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
