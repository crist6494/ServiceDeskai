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
import './styles.css';
import ImgUploader from './img-uploader/img-uploader';

function App() {
  return (
    <div className='container w-50  text-center p-2'>
        <h1 className='title'>Service Deskai</h1>
        <p className='mb-4'>Take an image and discover what's in it</p>
        <ImgUploader className="mb-3"/>
    </div>
  );
}

export default App;