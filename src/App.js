import './App.css';
import { FaTwitter} from 'react-icons/fa';

function App(){
  return (
    <div className='container'>
      <div id='quote-box'>
        <div id="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eos repellendus animi aspernatur explicabo amet adipisci eum, 
            excepturi quibusdam? Dolore recusandae repudiandae maxime?
        </div>
        <div id="author">
          - Danilo Santilli
        </div>        
        
        <a href="https://www.twitter.com/intent/tweet">
          <FaTwitter size={25} ></FaTwitter>
        </a>
        <button id="new-quote">New</button>
      </div>
    </div>
  );
}

export default App;
