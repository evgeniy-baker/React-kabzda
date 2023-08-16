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
    }, [])
    useEffect(() => {
        document.title = counter.toString()
        console.log("При обновлении счетчика")
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>Counter</button>
            <button onClick={() => setFake(fake + 1)}>Fake</button>
        </>
    );
};

const SetTimeout = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log("SetTimeoutExample")

    useEffect(() => {   //
        setTimeout(() => {
            console.log("Каждый раз")
            document.title = counter.toString()
        }, 1000)
    }, [counter])

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
            <SetTimeout/>
        </>
    );
};
