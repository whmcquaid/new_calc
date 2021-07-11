import './App.css';
import NumberProvider from './components/NumberProvider';
import Calculator from './components/Calculator';

function App() {
  return (
    <NumberProvider>
    <Calculator/>
    </NumberProvider>
  );
}

export default App;
