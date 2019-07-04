import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Update extends Component {
  state = {
    Task: "",
    InputDate: "",
    ReminderTime: "",
    id: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const content = {
      Task: this.state.Task,
      InputDate: this.state.InputDate,
      ReminderTime: this.state.ReminderTime,
      id: this.state.id
    };
    axios.put(`http://localhost:3001/data`, content).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };
  render() {
    return (
      <form>
        <input placeholder="Task" name="Task" onChange={this.handleChange} />
        <input
          placeholder="InputDate"
          name="InputDate"
          onChange={this.handleChange}
        />
        <input
          placeholder="ReminderTime"
          name="ReminderTime"
          onChange={this.handleChange}
        />
        <input placeholder="id" name="id" onChange={this.handleChange} />
        <Link to="/Create">
          <button onClick={this.handleSubmit}> Update </button>
        </Link>
      </form>
    );
  }
}

export default Update;
