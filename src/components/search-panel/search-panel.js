import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    onUpdateSearch = (e) => {
        const search = e.target.value;
        this.setState({search}); //короткий синтаксис, аналог: search:search
        this.props.onUpdateSearch(search); //не рекурсия, эта функция прописана в app.js, обновляет state в app.js
    }

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    
    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}/>
        )
    }
}