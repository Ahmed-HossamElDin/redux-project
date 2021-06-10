import './App.css';
import Navigationbar from './components/Navigationbar.js';
import Login from './views/Login.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Login/>
    </div>
  );
}

export default App;
