import './App.css';
import Welcome from './components/Welcome';
import PickRoom from './components/PickRoom';
import rooms from './components/PickRoom'


function App() {
  const pull_data = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <Welcome />
      <PickRoom func={pull_data}/>
    </div>
  );
}

export default App;
