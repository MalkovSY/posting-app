import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
// import style from './App.module.css';

const App = () => {

    const data = [
        {label: "I'm just trying learn this shit", important: false, id: "uniqueKey1"},
        {label: "This is twitter? lol no", important: false, id: "uniqueKey2"},
        {label: "JOJO reference", important: false, id: "uniqueKey3"},
        {label: "Hohoho its cristmas t7ime", important: true, id: "uniqueKey4"},
        {label: "Ho", important: false, id: "uniqueKe7y5"}
    ];

    return (            //вместо класса app теперь можно использовать style.app(через . какой именно класс вытащить) импортированный из App.module 
        <div className='app'> 
            <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={data} />
                <PostAddForm/>
        </div>
    )
}

export default App;