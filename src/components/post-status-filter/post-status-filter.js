import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {onFilterSelect, filter} = this.props;
            const active = filter === name;
            const classBtn = active ? 'btn-info' : 'btn-outline-secondary' 
            return (
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${classBtn}`}
                    onClick={() => onFilterSelect(name)}
                        >{label}</button>
            )
        })
        return (
            <div className="btn-group">
                {/* <Button outline color='info'>Все</Button> */}
                {/* <button type="button" className='btn btn-info'>Все</button> */}
                {buttons}
            </div>
        )
    }
}