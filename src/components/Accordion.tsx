import React from "react";

export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: (value: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}
                            onChange={props.onChange}
            />
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>
    )
}

export type AccordionTitlePropsType = {
    title: string
    onChange: (value: boolean) => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange(!e)}>-- {props.title} --</h3>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map( (el,index) => <li onClick={ ()=>{props.onClick(el.value)} } key={index}>{el.title}</li>)}
        </ul>
    )

}

export default Accordion;