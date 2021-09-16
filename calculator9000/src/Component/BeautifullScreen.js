import React, { useState, useEffect } from 'react';
import AmazingNumberButton from './AmazingNumberButton';


function BeautifullScreen() {

    const [string, setString] = useState("") ;
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