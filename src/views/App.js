import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent'
import ListToDo from './Todos/ListToDo'

/**
 * 2 components: class component / function component (function, arrow)
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple TODO Apps with React.js
        </p>
        {/* <MyComponent /> */}
        <ListToDo />
      </header>
    </div>
  );
}

export default App;
