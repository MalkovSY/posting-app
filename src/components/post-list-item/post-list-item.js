import React, {Component} from 'react';

import './post-list-item.sass'

export default class PostListItem extends Component {
    onImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }))
    }
    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }
    
    constructor (props) {
        super(props);
        this.state = {
            important: false,
            like: false
        }
    }
    render() {
        const {label} = this.props; //this.props свойство приходящее в каждый новосозданный компонент PostListItem
        const {important, like} = this.state;
        let classes = 'app-list-item d-flex justify-content-between';
        if (important) {
            classes += ' important';
        }
        if (like) {
            classes += ' like';
        }
    
        return (
        <div className={classes}>
                <span 
                    className="app-list-item-label"
                    onClick={this.onLike}>
                        {label}
                </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={this.onImportant}>
                        <i className="fas fa-star"></i>
                </button>
                <button 
                    type="button" 
                    className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                </button>
                        <i className="fas fa-heart"></i>
            </div>
        </div>
        )
    }
}