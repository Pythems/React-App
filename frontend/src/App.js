import React, { Component } from "react";
import "./App.css";
// import TodoList from "./TodoList";

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/create">
          <button>Create new User</button>
        </Link>
        <Link to="/Update">
          <button>Update Entry</button>
        </Link>
        <Link to="/Delete">
          <button>Delete Entry</button>
        </Link>
        <Link to="/view">
          <button>View all Entry</button>
        </Link>
      </div>
    );
  }
}

export default App;
