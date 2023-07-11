import React, {useState} from 'react';

type PropsType = {
    on: boolean
    setOn:(value: boolean) => void
}

export const OnnOffSecret = (props: PropsType) => {
    // let[on,setOn] = useState(false)

    const onStyle = {
        width: "50px",
        height: "25px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white",
        borderRadius: "25px",
        margin: "5px"
    }
    const offStyle = {
        width: "50px",
        height: "25px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "white" : "red",
        borderRadius: "25px",
        margin: "5px"
    }
    const indicatorStyle = {
        width: "25px",
        height: "25px",
        border: "1px solid black",
        backgroundColor: props.on ? "green" : "red",
        display: "inline-block",
        borderRadius: "25px",
        margin: "5px"
    }

    console.log('ON/OFF')

    return (
        <div>
            <div style={onStyle} onClick={ ()=>{props.setOn(!props.on)} }>ON</div>
            <div style={offStyle} onClick={ ()=>{props.setOn(!props.on)} }>OFF</div>
            <div style={indicatorStyle} onClick={ ()=>{} }>|</div>
        </div>
    );
};

export const OnnOff = React.memo(OnnOffSecret)