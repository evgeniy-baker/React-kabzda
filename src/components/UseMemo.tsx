import React, {useState} from 'react';

export const UseMemo = () => {

    const [a, setA] = useState(7)
    const [b, setB] = useState(7)

    let resultA = 5
    let resultB = 5

    for (let i = 1; i <= a; i++) {
        resultA *= i
    }
    for (let i = 1; i <= b; i++) {
        resultB *= i
    }


    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
};