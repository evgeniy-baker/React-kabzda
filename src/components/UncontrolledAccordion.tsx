import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    title: string
}

type ActionType = {
    type: string
}
const reducer = (state: boolean, action: ActionType) => {
    if (action.type === "TOGGLE-COLLAPSED") {
        return !state
    }
    return state
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(true)
    let [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={ ()=>{setCollapsed(!collapsed)} }/>*/}
            <AccordionTitle title={props.title} onClick={ ()=>{dispatch({type: "TOGGLE-COLLAPSED"})} }/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h1 onClick={ ()=>{props.onClick()} }> --- {props.title}</h1>
    )
}

type AccordionBodyPropsType = {}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}