import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Get extends Component {
  state = {
    Todolist: []
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/data`).then(res => {
      // console.log(res);
      const Todolist = res.data;
      this.setState({ Todolist });
      console.log(Todolist);
    });
  }
  render() {
    const columns = [
      { Header: "User ID", accessor: "id", style: { textAlign: "center" } },

      {
        Header: " Task Name",
        accessor: "Task",
        style: { textAlign: "center" }
      },

      { Header: "Date", accessor: "InputDate", style: { textAlign: "center" } },

      {
        Header: "Reminder Time",
        accessor: "ReminderTime",
        style: { textAlign: "center" }
      }
    ];
    return (
      <div>
        <ReactTable columns={columns} data={this.state.Todolist} />
      </div>
    );
    // ></ReactTable>)
  }
}

export default Get;
