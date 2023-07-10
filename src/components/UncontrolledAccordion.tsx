import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={ ()=>{setCollapsed(!collapsed)} }/>
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