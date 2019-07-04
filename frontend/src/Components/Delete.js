import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Delete extends Component {
  state = {
    id: ""
  };
  handleChange = event => {
    this.setState({
      id: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    axios.delete("http://localhost:3001/data/" + this.state.id).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };
  render() {
    return (
      <form>
        <input placeholder="id" onChange={this.handleChange} />
        <Link to="/Delete">
          <button onClick={this.handleSubmit}> Delete </button>
        </Link>
      </form>
    );
  }
}

export default Delete;
