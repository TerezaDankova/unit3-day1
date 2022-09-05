import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
    
       <ImageComponent  source="https://images.pexels.com/photos/2616342/pexels-photo-2616342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image" imageStyle={{ width: "1600px", height: "800px",}}/>
      <header className="App-header">
      <ButtonComponent label="This is a button " ButtonContainer={{
              fontSize: 30,
              elevation: 8,
              backgroundColor: "#C1D5EE",
              borderRadius: 50,
              color: "#006661"  
      }}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! <code></code> My name is Tereza.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
    </div>
  );
}

export default App;
