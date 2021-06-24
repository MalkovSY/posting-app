import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
// import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends React.Component {

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const newData = [...data.slice(0, index), ...data.slice(index + 1 )]; //index + 1 вырезает все со следущего за индекс

            return {
                data: newData
            }
        })
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        }) 
        
    }

    toggle = (data, id, prop) => {
        const index = data.findIndex(elem => elem.id === id);
        const oldObj = data[index];
        const newItem = {...oldObj, [prop]: !oldObj[prop]};

        const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        return {
            data: newData
        }
    }

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            return this.toggle(data, id, 'important');
        })
    }

    onToggleLiked = (id) => {
        this.setState(({data}) => {
            return this.toggle(data, id, 'like');
        })
    }

    onUpdateSearch = (search) => {
        this.setState({search});
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: "I'm just trying learn this shit", important: false, like:false, id: 1},
                {label: "This is twitter? lol no", important: false, like:false, id: 2},
                {label: "JOJO reference", important: false, like:false, id: 3},
                {label: "Hohoho its cristmas t7ime", important: false, like:false, id: 4}
            ],
            search: '',
            filter: 'all'
        };
        this.maxId = 5;
    }

    searchPosts = (items, search) => {
        if(search.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.label.indexOf(search) > -1
        })
    }

    filterPost = (items, filter) => {
        if(filter === 'like') {
            return items.filter(item => item.like)
        } else { //елси просто all
            return items
        }
    }

    render() {
        const {data, search, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPosts(data, search), filter);

        return (    //вместо класса app теперь можно использовать style.app(через . какой именно класс вытащить) импортированный из App.module 
            <AppBlock> 
                <AppHeader 
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    addItem={this.addItem} />
            </AppBlock>
    )
    }
}