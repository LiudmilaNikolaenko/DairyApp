import React  from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

function Items() {
  return ( 
    <div className = 'wrapper mx-1 mt-2 mb-3 px-3 pt-2'>
      <h2 className = 'text-dark font-weight-light'>Items</h2>
      <ItemForm />
      <ItemList />
    </div>
  )
};

export default Items;