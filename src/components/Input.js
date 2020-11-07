import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        const { name, value } = event.target; 
        this.props.handleChange(name, value);
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
            {
                this.props.fields.map((field)=> {
                    return (
                        <React.Fragment key={field.key} >
                        <label>{field.label}</label>
                        <input 
                        type={field.type}
                        name={field.name} 
                        value={this.props.values[field.name]}
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