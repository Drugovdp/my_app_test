import React, {useState} from 'react'
import './App.css'
import {students} from "./components/Data/Data"
import {GroupStudents} from './components/Group/Group'
import {InputTest} from "./components/Input/Input";

let arrNumGroup = students.map(el => el.group)
let NumberGroups = Math.max.apply(null, arrNumGroup);

const App = () => {

    let [massages, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"}
    ])

    const addMassage = (title: string) => {
        let newMessege = {message: title}
        setMessage([newMessege, ...massages])
    }

    return (
        <div className="main_block">
            <InputTest massages={massages} addMassage={addMassage}/>
            <h1>Журнал студентов факультета N</h1>
            <GroupStudents liststudents={students} numbergroup={NumberGroups} />
        </div>
    );
}

export default App;
