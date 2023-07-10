import React, {ChangeEvent, useRef, useState} from 'react';

export const UncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <input onChange={onChangeHandler}/> - value- {value}
        </>
    );
};
export const GetValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={onClickHandler}>save</button>
            - value- {value}
        </>
    );
};

export const ControlledInput = () => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    const [parentValue, setParentValue] = useState('')
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckBox = () => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    const [parentValue, setParentValue] = useState(true)

    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    const [parentValue, setParentValue] = useState<string | undefined>('none')

    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option value="none"></option>
            <option value="1">MSK</option>
            <option value="2">SPB</option>
            <option value="3">Afrika</option>
        </select>
    )
}