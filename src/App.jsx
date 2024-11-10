import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from 'react-markdown'
import simsHeader from "./assets/sims2-header.png"
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
      <img src={simsHeader} alt="sims2-logo" />
      <div className="App_input">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here"
        rows="5"
        cols="60"
      />
      <button onClick={submitRequest}>Submit</button>{" "}
      </div>
      
      {geminiResponse && (
        <div className="App_response">
          <h2>Response:</h2>
          <ReactMarkdown>{geminiResponse}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default App;
