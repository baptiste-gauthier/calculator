import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton'; 
import React, { useState } from 'react';
import CButton from './CButton';
import ItSOverNineThousand from './ItSOverNineThousand';

function calcul(data,functionresult,state9000,setstate9000)
{
  // var result = eval(data);
  // alert(result);
   
  functionresult(data = eval(data));

  if(data > 9000)
  {
    setstate9000(state9000 = "bloc_mgs_9000_block");
  }
  else if(data < 9000)
  {
    setstate9000(state9000 = "bloc_mgs_9000");
  }
  
}

function reset(data,functionresult)
{
  functionresult(data = ""); 
}

function AmazingNumberButton(props)
{
  const [state9000, setState9000] = useState("bloc_msg_9000") ;

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
        <MagnificientEqualButton functioncalcul={calcul} data={props.value} functionresult={props.function} state9000={state9000} setState9000={setState9000} />
      </div>

      <div>
        <ItSOverNineThousand statescreen={props.value} state9000={state9000} setState9000={setState9000} />
      </div>


    </div>
  )
}

export default AmazingNumberButton;