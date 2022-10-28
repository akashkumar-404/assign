import logo from './logo.svg';
import './App.css';
import { Allroutes } from './pages/allroutes';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
    </div>
  );
}

export default App;
