 import './Count.css';
import React from 'react';

class Info extends React.Component {
    render() {
        return (
            <div className='counter'>
                <p>All: {this.props.todos}</p>
                <p>Done: {this.props.done}</p>
                <p>Left: {this.props.left}</p>
            </div>
        )
    }
}

export default Info