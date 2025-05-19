import logo from './logo.svg';
import './App.css';
import { componente1 } from './components/componente1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido
        </p>
        <componente1 />
      </header>
    </div>
  );
}

export default App;
