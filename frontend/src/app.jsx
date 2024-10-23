/* Con js en vez de jsx

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'React App')
  );
}
*/

import React from 'react';

function App() {
  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

export default App;