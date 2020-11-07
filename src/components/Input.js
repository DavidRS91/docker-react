import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        const state = {};
            for (const field of props.fields) {
                state[field.name] = ""
        }
        this.state = state;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { value, name } = event.target; 
        const state = this.state
        state[name] = value;
        this.setState(state)
    }

    handleSubmit(event) {
        alert('form submitted')
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            {
                this.props.fields.map((field)=> {
                    return (
                        <React.Fragment key={field.key} >
                        <label>{field.label}</label>
                        <input 
                        type={field.type}
                        key={field.key} 
                        name={field.name} 
                        value={this.state[field.name]}
                        onChange={this.handleChange}
                        />
                        </React.Fragment>
                    )
                })
            }
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Input;