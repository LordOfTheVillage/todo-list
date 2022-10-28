import React from 'react';
import './Todo.css'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dispalyDelete: false,
    }
  }
  render () {
    const { name, done } = this.props;
    return (
      <div className='todo'>
        <input 
          type="checkbox"
          checked={done}
          onChange={this.handleCheck}
          id={name}
        />
        <label 
          htmlFor={name}
        >        
          {name}
          <button className='delete'
            onClick={this.handleRemove}
          >
            Delete
          </button>
        </label>     
      </div>
    )
  }
  handleRemove = () => {
    this.props.onClick(this.props.name)
  }

  handleCheck = (e) => {
    const done = e.target.checked
    this.props.onDone(done, this.props.name)
  }
}

export default Todo