import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from './Example/MyComponent'
import Nav from './Nav/Nav'
import Home from './Example/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
/**
 * 2 components: class component / function component (function, arrow)
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" exact="true" element={<Home />}>
            </Route>
            <Route path="/todo" element={<ListTodo />}>
            </Route>
            <Route path="/about" element={<MyComponent />}>
            </Route>
          </Routes>

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
    </BrowserRouter>
  );
}

export default App;
