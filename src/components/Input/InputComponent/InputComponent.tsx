import {ChangeEvent} from "react";

type InputComponentPropsType = {
    setTitle: (title: string)=>void
    title: string
}

export const InputComponent = (props: InputComponentPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    )
}
