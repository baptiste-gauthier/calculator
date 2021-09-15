function GreatOperationButton(props)
{
  return(
  <div className="column_calaculator">
    <button className="case_operator" onClick={() => {props.function(props.value + "+")}}>+</button>
    <button className="case_operator" onClick={() => {props.function(props.value + "-")}}>-</button>
    <button className="case_operator" onClick={() => {props.function(props.value + "*")}}>*</button>
    <button className="case_operator" onClick={() => {props.function(props.value + "/")}}>/</button>
  </div>
  )
}

export default GreatOperationButton;