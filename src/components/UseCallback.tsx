import React, {useCallback, useMemo, useState} from 'react';

type BooksSecretType = {
    addBook: () => void
}
const BooksSecret = (props: BooksSecretType) => {
    console.log('Books rendered')
    return <div>
        <button onClick={props.addBook}>Add book</button>
    </div>
}
const Books = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log('LikeUseCallback rendered')
    const [counter, setCount] = useState<number>(10)
    const [books, setBooks] = useState<Array<string>>(['HTML ', 'CSS ', 'JS ', 'REACT '])

    const AddBookUseMemo = useMemo(()=> {
            return () => {
                console.log('New book rendered')
                const newBook = `NODE JS `
                setBooks([newBook, ...books])
            }
        },[books]
    )

    const AddBookCallback = useCallback(()=> {
                console.log('New book rendered')
                const newBook = `NODE JS `
                setBooks([newBook, ...books])
        },[books]
    )

    return <>
        <button onClick={() => setCount(counter + 1)}>Count + 1</button>
        {counter}
        <Books addBook={AddBookCallback}/>
        {books}
    </>

};