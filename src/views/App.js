import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent'
import ListTodo from './Todos/ListTodo'

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
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
