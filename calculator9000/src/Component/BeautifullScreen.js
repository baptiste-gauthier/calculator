import React, { useState } from 'react';
import AmazingNumberButton from './AmazingNumberButton';


function BeautifullScreen() {

    const [string, setString] = useState("0") ;
    return( 
    <div>
        <div className="calculator_screen">
            <p> {string}</p>
        </div>
        <AmazingNumberButton value={string} function={setString}/>
    </div>
    )
}

export default BeautifullScreen;