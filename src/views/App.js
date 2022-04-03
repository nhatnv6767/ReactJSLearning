import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav'

/**
 * 2 components: class component / function component (function, arrow)
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <MyComponent /> */}
        <ListTodo />

      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
}

export default App;
