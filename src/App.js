import './App.css';
import Welcome from './components/Welcome';
import PickRoom from './components/PickRoom';


function App() {
  const pull_data = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <Welcome />
      <PickRoom />
    </div>
  );
}

export default App;
