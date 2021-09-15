import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton'; 
import React, { useState } from 'react';
import CButton from './CButton';

function calcul(data,functionresult)
{
  // var result = eval(data);
  // alert(result);
   
  functionresult(data = eval(data));

  if(data > 9000)
  {
    alert("ooooooooh"); 
  }
  
}

function reset(data,functionresult)
{
  functionresult(data = ""); 
}

function AmazingNumberButton(props)
{
  return (
    <div className="touches">
      <div className="number">
        <div className="row_calaculator">
          <button className="case_calculator" onClick={() => {props.function(props.value + 9)}}>9</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 8)}}>8</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 7)}}>7</button>
        </div>
        <div className="row_calaculator">
          <button className="case_calculator" onClick={() => {props.function(props.value + 6)}}>6</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 5)}}>5</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 4)}}>4</button>
        </div>
        <div className="row_calaculator">
          <button className="case_calculator" onClick={() => {props.function(props.value + 3)}}>3</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 2)}}>2</button>
          <button className="case_calculator" onClick={() => {props.function(props.value + 1)}}>1</button>
        </div>
        <div className="row_calaculator">
          <button className="case_calculator_0" onClick={() => {props.function(props.value + 0)}}>0</button>
        </div>
      </div>
      <div className="operator">
        <GreatOperationButton value={props.value} function={props.function} />
      </div>
      <div>
        <CButton functionreset={reset} data={props.value} functionresult={props.function}/>
      </div>
      <div className="egal">
        <MagnificientEqualButton functioncalcul={calcul} data={props.value} functionresult={props.function} />
      </div>
    </div>
  )
}

export default AmazingNumberButton;