import React from 'react';

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    title: string
    value: string
    collapsed: boolean
    onChange: (value: boolean) => void
    items: ItemType[]
    carValue: string
    SetCarValue: (setValue: string) => void
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <SelectTitle title={props.title}
                         value={props.value}
                         onChange={props.onChange}
                         carValue={props.carValue}
            />
            {!props.collapsed && <SelectBody items={props.items}
                                             SetCarValue={props.SetCarValue}/>}
        </div>
    );
};

type SelectTitlePropsType = {
    title: string
    value: string
    onChange: (value: boolean) => void
    carValue: string
}

function SelectTitle(props: SelectTitlePropsType) {
    return (
        <h3 onMouseOver={(e) => props.onChange(!e)}>{props.title} {props.carValue}</h3>
    )
}

type SelectBodyPropsType = {
    items: ItemType[]
    SetCarValue: (setValue: string) => void
}
const SelectBody = (props: SelectBodyPropsType) => {

    const onClickHandler = (title: string) => {
        props.SetCarValue(title)
    }

    return (
        <ul>
            {props.items.map((el, index) => <div onClick={() => onClickHandler(el.title)} key={index}>{el.title}</div>)}
        </ul>
    )
}