import './App.css';
import Banner from './components/banner';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Banner/>
      <h1>
        Your Gateway to India
      </h1>
      <p>
        Expand your global business and enter the Indian markets NOW!
      </p>
    </div>
  );
}

export default App;