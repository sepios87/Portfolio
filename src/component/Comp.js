import React from 'react'
import {ProgressBar} from 'react-bootstrap'


export default function Comp(){
    return (
        <div>
            <h3>Java</h3>
            <ProgressBar animated variant="info" now={20} />
        </div>
    );
}