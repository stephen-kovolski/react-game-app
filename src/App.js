import './App.css';
import Welcome from './components/Welcome';
import PickRoom from './components/PickRoom';


function App() {
  return (
    <div className="App">
      <Welcome />
      <div className='roomButton'>
        <PickRoom room="101" />
        <PickRoom room="102" />
        <PickRoom room="103" />
      </div>
    </div>
  );
}

export default App;
