import axios from "axios";

export default class APIService {
  static async InsertData(data) {
    const parsedData = JSON.parse(data);
    const requestType = this.requestType;
    axios
      .post("http://localhost:5000/" + requestType, parsedData)
      .then((response) => {
        console.log(response.data);
        this.sendData(response.data);
      })
      .catch((error) => console.log(error));
  }
}
