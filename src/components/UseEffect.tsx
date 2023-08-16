import React, {useEffect, useState} from 'react';

const UseEffect = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("Example")

    useEffect(() => {   //
        document.title = counter.toString()
        console.log("Каждый раз")
    })
    useEffect(() => {
        document.title = counter.toString()
        console.log("Один раз")
    },[])
    useEffect(() => {
        document.title = counter.toString()
        console.log("При обновлении счетчика")
    },[counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>Counter</button>
            <button onClick={() => setFake(fake + 1)}>Fake</button>
        </>
    );
};

export const UseEffectApp = () => {
    return (
        <>
            <UseEffect/>
        </>
    );
};
