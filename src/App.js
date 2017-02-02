import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from './components/todo/TodoForm'

class App extends Component {

  constructor() {
      super()
      this.state = {
          todos: [
              {id: 1, name: 'Get one point', isComplete: false},
              {id: 2, name: 'Get 100 points', isComplete: true},
              {id: 3, name: 'Get 1000 points', isComplete: false}
          ],
          currentTodo: ''
     }
     this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
      this.setState({
          currentTodo: event.target.value
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="todo-block">
            <TodoForm handleInputChange={this.handleInputChange}
                currentTodo={this.state.currentTodo}/>
            <div className="todo-list">
                <ul>
                    {this.state.todos.map(todo =>
                        <li key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
                        </li>
                    )}
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
