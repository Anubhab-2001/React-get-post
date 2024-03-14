import React, { useState } from "react";
import axios from "axios";
// get request- string
const App = () => {
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  // post request - string
  const data = "Hello";
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  // post request- form
  const [formdata, setFormdata] = useState("");
  const postformFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formdata,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={getDataFromBackend}> Get Data </button>
      <p id="para"></p>
      <br></br>

      <button onClick={postDataFromFrontend}> Post Data </button>
      <p id="para"></p>

      <form onSubmit={postformFromFrontend}>
        <input
          type="text"
          name="formdata"
          value={formdata}
          onChange={(e) => setFormdata(e.target.value)}
        ></input>
        <input type="submit" value="testform"></input>
      </form>
    </div>
  );
};

export default App;
