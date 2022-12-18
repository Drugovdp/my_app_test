type ButtonComponentPropsType = {
  name: string
  callBack: ()=>void
}

export const ButtonComponent = (props: ButtonComponentPropsType) => {
  const onClickButtonHandler = () => {
    props.callBack()
  }

  return (
      <button onClick={onClickButtonHandler}>{props.name}</button>
  )
}