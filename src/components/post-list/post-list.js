import React from 'react';
import {ListGroup} from 'reactstrap';
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
     <ListGroup className="app-list">
         {elements}
     </ListGroup>
 )
}

export default PostList;