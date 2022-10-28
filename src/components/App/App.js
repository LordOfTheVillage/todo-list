import React from 'react';
import Todo from '../Todo/Todo';
import Count from '../Count/Count';
import './App.css';

export default class App extends React.Component{

  constructor () {
    super()
    this.state = {
      name: '',
      todos: [
        {
          name: 'ПРЕСС КАЧАТ',
          done: true,
        },
        {
          name: 'Т) БЕГИТ',
          done: false,
        },
        {
          name: 'ТУРНИК',
          done: false,
        },
        {
          name: 'АНЖУМАНЯ',
          done: false,
        }
      ]
    }
  }

  render () {
    const leftCount = this.state.todos.filter( (e) => !e.done ).length,
          doneCount = this.state.todos.filter( (e) => e.done ).length,
          todosCount = this.state.todos.length
    return (
      <div className='container'>
        <div>
          <Count 
            left={leftCount} 
            done={doneCount} 
            todos={todosCount}
          />
        </div>
        <div>
          <div className='enter'>
            <input 
              value={this.state.name}
              onChange={this.handleSetName}
            />
            <button
              onClick={this.handleAddTodo}
            >
              Save
            </button>
          </div>
          {this.state.todos.map( (todo) => (
            <Todo 
              name = {todo.name}
              done = {todo.done}
              onClick={this.handleCheckDelete}
              onDone={this.handleSetDone}
            />
          ))}
        </div>
      </div>
    )
  }

  handleCheckDelete = (name) => {
    this.setState({
      todos: this.state.todos.filter( e => e.name !== name)
    })
  }

  handleSetName = (e) => {
    const name = e.target.value;
    this.setState({name})
    if (
      this.state.todos.filter(
        (e) => e.name.replace(/\s/g, '') === name.replace(/\s/g, '')
      ).length !== 0
    ) {
      e.target.nextSibling.disabled = true;
    } else {
      e.target.nextSibling.disabled = false;
    }
  }

  handleSetDone = (newDone, name) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.name === name
        ? {name, done: newDone}
        : todo 
      )
    })
  }

  handleAddTodo = () => {
    const todo = {
      name: this.state.name,
      done: false,
    }

    if (todo.name.trim().length !== 0)
    {
      this.setState({
        name: '',
        todos: this.state.todos.concat([todo])
      })
    } else {
      alert('Нельзя вписывать пустое имя');
    }
  }
}
