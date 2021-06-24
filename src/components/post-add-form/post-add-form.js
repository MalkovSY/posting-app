import React, {Component} from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
    onValueChange = (event) => {
        this.setState({
            text: event.target.value //свойство текст у state не зависит от предыдущего значения, поэтому без коллбек функции меняем значение
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.text);
        this.setState({
            text: ''
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чем вы сейчас думаете?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                        Добавить
                </button>
            </form>
        )
    }
    
}