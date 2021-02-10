import React, {Component}from 'react';

class SearchField extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder='type name of coin here'
                    value={name}
                    onChange={this.handleChange}
                />
                <button type="submit">
                    Search
                </button>
            </form>
        );
    }
}
export default SearchField;