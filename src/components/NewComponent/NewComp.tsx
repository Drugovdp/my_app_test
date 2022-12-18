import React from 'react';
import {StateType} from "../State/State";

type NewCompPropsType = {
    students: StateType
}

export const NewComp = (props: NewCompPropsType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const style = {
        table: {width: "80%", margin: "30px auto"},
        td: {backgroundColor: "#1c87c9", color: "#fff"}
    }

    return (
        <div>
            <p>New components</p>
            <table style={style.table}>
                <thead>
                <tr style={style.td}>
                    {topCars.map((name, i) => {
                        return (
                            <th key={i}>{name.manufacturer}</th>
                        )
                    })}
                </tr>
                </thead>
                <tbody>
                <tr>
                    {topCars.map((name, i) => {
                        return (
                            <th key={i}>{name.model}</th>
                        )
                    })}
                </tr>
                </tbody>
            </table>
            <ul>
                {props.students.student.map((el, k) => {
                    return (
                        <li key={k}>Порядковый номер студента: {el.id} - имя {el.name}</li>
                    )
                })}
            </ul>

        </div>
    )
};


