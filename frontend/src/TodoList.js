import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <form onSubmit={this.props.addItem} />
            <input placeholder="Task" />
            <input placeholder="DD/MM/YY" />
            <input placeholder="HR:MN" />
            <div>
              <button type="submit"> Submit </button>
              <button type="submit"> Delete </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
