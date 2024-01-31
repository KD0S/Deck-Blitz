import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Card } from './Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div className='cards-container'>
<Card color={'green'}></Card>
      <Card color={'red'}></Card>
      <Card color={'blue'}></Card>
      <Card color={'yellow'}></Card>
     </div>
  </React.StrictMode>
);

