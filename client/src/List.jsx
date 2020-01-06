import React from 'react';
import ListItem from './ListItem.jsx';

var List = ({groceries}) => (
  <ul className="groceries">
    {groceries.map( (grocery, i) =>
      <ListItem key = {i} grocery = {grocery} name = {grocery.name} quantity = {grocery.quantity}/>
    )}
  </ul>
)

export default List;