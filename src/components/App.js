import React  from 'react';
import Items from './Items';
import Comments from './Comments';

function App() {
  return ( 
    <div className = 'container-fluid'>
      <div className = 'row'>
        <div className = 'col-xl-2 bg-dark window_height_size'>
          <h1 className = 'text-white font-weight-light'>DAIRY APP</h1>
          <p className = 'text-secondary'>Comment with no sense</p>
        </div>
        <div className = 'col-xl-5 window_height_size'>
          <Items />
        </div>
        <div className = 'col-xl-5 window_height_size'>
          <Comments />
        </div>
      </div>
    </div>
  )
};

export default App;