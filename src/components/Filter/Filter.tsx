type currentMoneyPropsType = {
    currentMoney: Array<currentMoneyType>,
    callBack: (n: string) => void
}

type currentMoneyType = {
    banknots: string,
    value: number,
    number: string
}

export const Filter = (props: currentMoneyPropsType) => {

    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => { props.callBack("ALL") }}>ALL</button>
            <button onClick={() => { props.callBack("RUBLS") }}>ruble</button>
            <button onClick={() => { props.callBack("Dollars") }}>dollar</button>
        </div>
    )
}