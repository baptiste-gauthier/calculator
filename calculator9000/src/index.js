import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Test(props) {
  return <p> {props.name}</p>
}

const element = <Test name="Bapt" /> 


// ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
//   element,
//   document.getElementById('root')
// );

function List(props)
{
  return (
    <ul className="list">
      <li> {props.number} </li>
      <li> {props.number}</li>
      <li> {props.number}</li>
    </ul>
  )
}

const list = <List number="1" />

ReactDOM.render(
  list,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
