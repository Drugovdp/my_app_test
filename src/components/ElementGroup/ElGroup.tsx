type ElGroupPropsType = {
    j: number,
    names_header: string[]
    names_header_1: string[]
    elems: Array<TitlesType>
}

type TitlesType = {
    id: number
    name: string
    age: number
    group: number
    titles: Array<ElTitlesType>
}

type ElTitlesType = {
    subject: string
    isDone: boolean
}

export const ElGroup = (props: ElGroupPropsType) => {
    return (
        <div className="block_group">
            <h3 className="header_table">Group {props.j+1}</h3>
            <table>
                <thead>
                <tr>
                    {props.names_header.map(name => {
                        return (
                            name !== "titles" ? <th rowSpan={2}>{name}</th> :
                                <th style={{ textAlign: "center" }} colSpan={3}>{name}</th>
                        )
                    })}
                </tr>
                <tr>
                    {props.names_header_1.map(name => {
                        return (
                            <th>{name}</th>
                        )
                    })}
                </tr>
                </thead>
                {props.elems.map((elem, k) => {
                    return (
                        <tbody>
                        <tr>
                            <td rowSpan={2}>{elem.id}</td>
                            <td rowSpan={2}>{elem.name}</td>
                            <td rowSpan={2}>{elem.age}</td>
                            <td rowSpan={2}>{elem.group}</td>
                            {elem.titles.map((e) => <td><input type={"checkbox"} checked={e.isDone} />
                            </td>)}
                        </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}