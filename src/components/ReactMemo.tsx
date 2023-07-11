import React, {useState} from 'react';

const Counter = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
    )
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS")
    return (
        <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
    )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const[counter, setCounter] = useState(0)
    const[users, setUsers] = useState(['Name1', 'Name2', 'Name3'])

    const addUser = () => {
        const addUser = `Name ${counter}`
        setUsers([addUser,...users])
    }

    return (
        <>
            <button onClick={ () => setCounter(counter + 1) }>+</button>
            <button onClick={ addUser }>user + 1</button>
            <Counter count={counter}/>
            <Users users={users}/>
        </>
    );
};