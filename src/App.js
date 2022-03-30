import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./Home/Home";
// import "./index.scss";

// export default class App extends React.Component {
  // constructor(props) {
  //   this.state = {
  //     user: props.user,
  //     isLogedIn: false,
  //   };
  // }
  // userIsLogedIn() {}
  // componentDidMount() {
  //   if (this.state.user.username && this.state.user.password) {
  //     fetch("http://localhost:", {
  //       method: "GET",
  //       credentials: "include",
  //       referrerPolicy: "origin-when-cross-origin",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         Accept: "application/json",
  //       },
  //     })
  //       .then((resp) => resp.json())
  //       .then((user) => {
  //         if (user.username.length) this.setState({ user: user });
  //       });
  //   }
  // }
  // render() {
//     function App() {
//     return (
//       <div className="App">
//         <Navbar />
//         <Home />
//       </div>
//     );
//   }

// export default App
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;