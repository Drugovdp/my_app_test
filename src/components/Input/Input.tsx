import {ChangeEvent, useState} from "react";
import {InputComponent} from "./InputComponent/InputComponent";
import {ButtonComponent} from "./ButtonComponent/ButtonComponent";

type InputTestPropsType = {
    massages: Array<MassageType>
    addMassage: (title: string)=>void
}

type MassageType = {
    message: string
}

export const InputTest = (props: InputTestPropsType) => {
    let [title, setTitle] = useState("")

    const onClickButtonHandler = () => {
        props.addMassage(title)
        setTitle('')
    }

  return(
      <div>
          <InputComponent setTitle={setTitle} title={title} />
          <ButtonComponent name={'+'} callBack={onClickButtonHandler} />
          {props.massages.map((el, index) => {
              return (
                  <div key={index}>{el.message}</div>
              )
          })}
      </div>
  )
}

