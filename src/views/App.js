import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponents'
/**
 * 2 components: class component / function component (function, arrow)
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Need to be be be be
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
