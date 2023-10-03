import React from "react";

class ToDoList extends React.Component {
  constructor() {
    super();
    // const date = new Date();
    // const toDoCounter = 1;

    this.state = {
      //Initialize state
      toDoCounter: null,
      list: [
        {
          id: null,
          createdAt: null,
        },
      ],
      input: "",
    };
  }

  addToStart() {
    const date = new Date();
    const nextId = this.state.toDoCounter + 1;
    const newList = [{ id: nextId, createdAt: date, text: this.state.input }, ...this.state.list,
    ];
    this.setState({
      list: newList,
      toDoCounter: nextId,
      input: "", // Reset
    });
  }

  addToEnd() {
    const date = new Date();
    const nextId = this.state.toDoCounter + 1;
    const newList = [...this.state.list, { id: nextId, createdAt: date, text: this.state.input },
    ];
    this.setState({
      list: newList,
      toDoCounter: nextId,
      input: "", // Reset
    });
  }

  handleInputChange(event) {
    //update inpute state
    this.setState({ input: event.target.value });
  }

  deleteItem(id) {
    const updatedList = this.state.list.filter((item) => item.id !== id );
    this.setState({list : updatedList});
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="input-box">
            <input
              value={this.state.input}
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className="button-box">
            <button onClick={() => this.addToStart()}>Add to Start</button>
            <button onClick={() => this.addToEnd()}>Add to End</button>
          </div>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Created At</th>
                <th>Text</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((todo, index) =>
                  todo.text && (
                    <tr key={index}>
                      <td>{todo.id}</td>
                      <td>
                        {todo.createdAt?.toLocaleTimeString("en-US", {month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: true, })}
                      </td>
                      <td>{todo.text}</td>
                      <td>
                        <button onClick={() => this.deleteItem(todo.id)}>Delete</button>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ToDoList;
