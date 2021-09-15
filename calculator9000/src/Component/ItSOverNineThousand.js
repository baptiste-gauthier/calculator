
import React, { useState } from 'react';

function ItSOverNineThousand()
{
    const [classname, setClassname] = useState("bloc_msg_9000") ;
    var message = 'It’s Over 9000 !!!';
    return (
        <div className={classname}>
            <p> {message} </p>
        </div>
    )
}

export default ItSOverNineThousand; 