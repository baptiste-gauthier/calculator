function MagnificientEqualButton(props)
{
    return (
        <button onClick={ () => {props.functioncalcul(props.data,props.functionresult)}}> = </button>
    )
}

export default MagnificientEqualButton;