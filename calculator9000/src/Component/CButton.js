function CButton(props) {
    return (
        <button id="btn_c" onClick={ () => {props.functionreset(props.data,props.functionresult)}}> C </button>
    )
}

export default CButton;