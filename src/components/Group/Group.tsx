import "../../Style/GroypStyle.css"
import {ElGroup} from "../ElementGroup/ElGroup";

export type GroupPropsType = {
    numbergroup: number
    liststudents: Array<{
        id: number
        name: string
        age: number
        group: number
        titles: Array<titlesType>
    }>
}

type titlesType = {
    subject: string
    isDone: boolean
}

export const GroupStudents = (props: GroupPropsType) => {

    let arrGroup = []
    for (let i = 1; i <= props.numbergroup; i++) {
        let res = props.liststudents.filter(e => e.group === i)
        arrGroup.push(res)
    }

    let names_header = Object.keys(arrGroup[0][0])
    let names_header_1 = Object.values(arrGroup[0][0].titles.map(key => key.subject))

    return (
        <div>
            {arrGroup.map((elems, j) => {
                if (j === 0) {
                    return (
                        <ElGroup j={j} names_header={names_header} names_header_1={names_header_1} elems={elems}/>
                    )
                }else if (j === 1) {
                    return (
                        <ElGroup j={j} names_header={names_header} names_header_1={names_header_1} elems={elems}/>
                    )
                }else if (j === 2) {
                    return (
                        <ElGroup j={j} names_header={names_header} names_header_1={names_header_1} elems={elems}/>
                    )
                }
            })}
        </div>
    )
}