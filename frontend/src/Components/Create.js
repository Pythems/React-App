import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Create extends Component {
  state = {
    Task: "",
    InputDate: "",
    ReminderTime: ""
  };
  handleChange = event => {
    this.setState({
      Task: event.target.value,
      InputDate: event.target.value,
      ReminderTime: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const content = {
      Task: this.state.Task,
      InputDate: this.state.InputDate,
      ReminderTime: this.state.ReminderTime,
      id: 0
    };
    axios.post(`http://localhost:3001/data`, content).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form>
        <input placeholder="Task" onChange={this.handleChange} />
        <input placeholder="InputDate" onChange={this.handleChange} />
        <input placeholder="ReminderTime" onChange={this.handleChange} />
        <Link to="/Create">
          <button onClick={this.handleSubmit}> Create </button>
        </Link>
      </form>
    );
  }
}

export default Create;
