import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [geminiResponse, setGeminiResponse] = useState(null);
  const [prompt, setPrompt] = useState("");
  // fetch call
  const submitRequest = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/gemini-data",
        { prompt }
      ); // Use Axios to fetch data
      setGeminiResponse(response.data.gemini); // Store the fetched data in state
    } catch (error) {
      const errorMessage = error.response.data.error
      if(errorMessage){
        setGeminiResponse(errorMessage)
      }
      else {
        setGeminiResponse("Something Went Wrong. Try Again")
        console.error("Error fetching data:", error);
      }
       // Handle errors
    }
  };

  return (
    <div className="App">
      <h1>AI Companion</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)} // Update prompt state on input change
        placeholder="Enter your prompt here"
      />
      <button onClick={submitRequest}>Submit</button>{" "}
      {/* Button to submit the request */}
      {geminiResponse && (
        <div>
          <h2>Response:</h2>
          <p>{geminiResponse}</p>
        </div>
      )}
    </div>
  );
}

export default App;
