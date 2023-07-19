import React, {useState} from 'react';

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersToMemo = (props: { users: Array<string> }) => {
    console.log('Users rendered')
    return <div>
        {props.users.map((u, i) => <div key={i}>
            {u}
        </div>)}
    </div>
}
const Users = React.memo(UsersToMemo)

export const ReactMemo = () => {
    console.log('ReactMemo rendered')
    const [counter, setCount] = useState<number>(10)
    const [users, setUsers] = useState<Array<string>>(['Evgenii', 'Dasha', 'Dima', 'Vika'])

    const addUser = () => {
        console.log('newUser rendered')
        const newUser = `ФИО ${new Date().getTime()}`
        setUsers([newUser, ...users])
    }

    return <>
        <NewMessageCounter count={counter}/>
        <button onClick={() => setCount(counter + 1)}>count + 1</button>
        <button onClick={addUser}>add user</button>
        <Users users={users}/>
    </>
};