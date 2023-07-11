import React, {useReducer} from "react";
import {reducer} from "./reducer/reducer";

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordionSecret(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={ ()=>{setCollapsed(!collapsed)} }/>*/}
            <AccordionTitle title={props.title} onClick={() => dispatch({type: "TOGGLE-COLLAPSED"})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}
export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    return (
        <h1 onClick={() => {
            props.onClick()
        }}> -- {props.title} -- </h1>
    )
}

export const AccordionTitle = React.memo(AccordionTitleSecret)

type AccordionBodyPropsType = {}

function AccordionBodySecret(props: AccordionBodyPropsType) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export const AccordionBody = React.memo(AccordionBodySecret)