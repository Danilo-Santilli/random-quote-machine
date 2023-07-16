import './App.css';
import { FaGithub} from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';

function App(){
  const [quote, setQuote] = useState();

  useEffect(()=>{
    quoteSelect();
  },[])

  const quoteSelect = useCallback( async ()=>{
    const response = await fetch('../services/quotes.json');
    const quotes = await response.json();
    let randomQuote = Math.floor(Math.random() * quotes.length)
    if (randomQuote === 0) randomQuote =+ 1
    const quoteSelected = quotes[randomQuote - 1]
    if (quoteSelected === quote) {
      quoteSelect();
    }
    setQuote(quoteSelected);
  }, [quote])

  function handleChangeQuote(e){
    e.preventDefault();
    quoteSelect();
  }

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
          
            <a href="https://github.com/Danilo-Santilli/random-quote-machine" target='_blank' rel='noreferrer'>
              <FaGithub size={25} ></FaGithub>
            </a>
            <button id="new-quote" onClick={handleChangeQuote}>New</button>
          </div>
        </div>
      ) : "Loading..."}
    </>
  );
}

export default App;
