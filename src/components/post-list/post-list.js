import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({posts}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;//вытаскиваем в отдельн. переменную только id, ВСЕ остальное помещаем в ...itemProps
        return (
            <li key={id} className="list-group-item"> 
                <PostListItem {...itemProps} /> 
            </li> //<PostListItem {...item} = label={item.label} important={item.important}
        )
    })
 return (
     <ul className="app-list list-group">
         {elements}
     </ul>
 )
}

export default PostList;