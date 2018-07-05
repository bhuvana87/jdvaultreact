import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render(label, type) {
        
        return(
        <label>
            {this.label}
            <input type={this.type} value={this.state.value} onChange={this.handleChange} />
        </label>
        );
    }
}

export default Input;