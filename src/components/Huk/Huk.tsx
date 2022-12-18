import {useState} from "react";

export const Hooks = () => {
    let [a, setA] = useState(1)
    const onClickHendler = () => {
        setA(++a)
        // console.log(a)
    }

    const resetClickHendler = () => {
        return setA(a = 0)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHendler}>NUMBER</button>
            <button onClick={resetClickHendler}>reset</button>
        </div>
    )
}