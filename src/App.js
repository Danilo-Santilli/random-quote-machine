import './App.css';
import { FaTwitter} from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App(){
  const [quote, setQuote] = useState();

  useEffect(()=>{
    const fetchQuote = async () => {
      const res = await fetch('../services/quotes.json');
      const quotes = await res.json();
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex - 1];
      setQuote(randomQuote);
    }
    fetchQuote();
  },[])

  return (
    <>
      {quote ? (
        <div className='container'>
          <div id='quote-box'>
            <div id="text">
              "{quote.quote}"
            </div>
            <div id="author">
              - {quote.author}
            </div>        
          
            <a href="https://www.twitter.com/intent/tweet">
              <FaTwitter size={25} ></FaTwitter>
            </a>
            <button id="new-quote">New</button>
          </div>
        </div>
      ) : "Loading..."}
    </>
  );
}

export default App;
