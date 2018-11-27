import React, {Component} from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({username: '', message: ''});
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>Event Practice!!</h1>
                <input
                    type="text"
                    name="username"
                    placeholer="User Name"
                    value={this.state.username}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <input
                    type="text"
                    name="message"
                    placeholer="Input message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>Confirm</button>
            </div>
        );
    }
}

export default EventPractice;