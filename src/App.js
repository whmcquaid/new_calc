import logo from './logo.svg';
import './App.css';
import NumberProvider from './components/NumberProvider';

function App() {
  return (
    <NumberProvider>
    <div className="App">
     Testing Number Provider
    </div>
    </NumberProvider>
  );
}

export default App;
