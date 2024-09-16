import logo from './logo.svg';
import React from 'react';
import './App.css';

const App = () => {
  //JSX Code
  return <h1 title='Welcome Message'> Hello friends, This is my first react application.</h1>

  //convert JSX code to React code
  return React.createElement('h1', {title:'Welcome Message'}, 'Hello Freinds, Welcome to COMP229')
};



export default App;
