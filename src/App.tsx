import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {OnnOff} from "./components/OnnOff";
import NewSelect from "./components/NewSelect";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {Example1} from "./components/ReactMemo";

function App() {

    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionValue, setAccordionValue] = useState<boolean>(false)
    // let [selectValue, setSelectValue] = useState<boolean>(true)
    // let [carValue, SetCarValue] = useState('Ford')
    let [on, setOn] = useState(true)
    const [title, setTitle] = useState('Moscow')

    const onClickCallBack = () => {
        alert("На этот элемент кликнули")
    }

    return (
        <div className={"App"}>

            {/*<Accordion title={'Users'}*/}
            {/*           collapsed={accordionValue}*/}
            {/*           onChange={() => setAccordionValue(!accordionValue)}*/}
            {/*           items={[*/}
            {/*               {title: 'Name_1', value: 1},*/}
            {/*               {title: 'Name_2', value: 2},*/}
            {/*               {title: 'Name_3', value: 3},*/}
            {/*               {title: 'Name_4', value: 4}*/}
            {/*           ]}*/}
            {/*           onClick={onClickCallBack}*/}
            {/*/>*/}

            <OnnOff on={on}
                    setOn={setOn}/>

            {/*<NewSelect title={title}*/}
            {/*           onChange={setTitle}*/}
            {/*           items={[*/}
            {/*               {value: '1', title: 'Minsk'},*/}
            {/*               {value: '2', title: 'Moscow'},*/}
            {/*               {value: '3', title: 'Kiev'}*/}
            {/*           ]}/>*/}

            <UncontrolledAccordion title={'useReducer'}/>

            <Example1/>
        </div>
    );
}

export default App;