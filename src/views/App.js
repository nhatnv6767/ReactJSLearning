import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from './Example/MyComponent'
import Nav from './Nav/Nav'
import Home from './Example/Home'
import ListUser from './Users/ListUser'
import DetailUser from './Users/DetailUser'
import {
  BrowserRouter,
  Switch,
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

          <Switch>
            <Route path="/" exact component={Home}>
              {/* <Home /> */}
            </Route>
            <Route path="/todo" component={ListTodo}>
              {/* <ListTodo /> */}
            </Route>
            <Route path="/about" component={MyComponent}>
              {/* <MyComponent /> */}
            </Route>
            <Route path="/user" exact component={ListUser}>
            </Route>
            <Route path="/user/:id" component={DetailUser}>
            </Route>
          </Switch>

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
