
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="Text Utils" about="About Us"/>
      <div className='container'>
      <Textform heading="Enter Your Text Below"/>
      </div>
    
    </>
  );
}

export default App;
