import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({item: ""});
        this.props.addItem(e, this.state.item);
    }
    render() {
        return(
            <div className="bucket-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                    name="item"
                    value={this.state.item}
                    placeholder="New Goal"
                    onChange={this.handleChanges}/>
                    <button onClick={this.handleSubmit}>Add Goal</button>
                </form>
            </div>
        );
    }
}
export default Form;