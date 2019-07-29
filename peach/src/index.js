import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const CONDUCTS = [
  {status: 1, date: '07/01'},
  {status: 2, date: '07/02', comments: 'too loud'},
  {status: 1, date: '07/03'},
  {status: 3, date: '07/04', comments: 'interrupted class'},
  {status: 1, date: '07/05'}
];

ReactDOM.render(
  <App conducts={CONDUCTS} />,
  document.getElementById('root')
);