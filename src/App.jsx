import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <div className="quote-box">
        {loading ? (
          <p className="quote">Loading...</p>
        ) : (
          <>
            <p className="quote">"{quote}"</p>
            <p className="author">- {author}</p>
          </>
        )}
        <button onClick={getQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
