import React, {useState} from 'react';
import styles from './NewSelect.module.css'

type ItemType = {
    value: any
    title: any
}

type SelectType = {
    title: any
    onChange: (title: any) => void
    items: ItemType[]
}

const NewSelect = (props: SelectType) => {

    const [active, setActive] = useState(false)

    const toggleItem = () => {
        setActive(!active)
    }

    const onChange = (title: any) => {
        props.onChange(title)
        toggleItem()
    }

    return (
        <div className={styles.select}>

            <span className={styles.main} onClick={toggleItem}>{props.title}</span>

            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i =>
                        <div className={styles.item}
                             onClick={ () => onChange(i.title) }
                            key={i.value}> {i.title}
                        </div>)}
                </div>
            }

        </div>
    );
};

export default NewSelect;