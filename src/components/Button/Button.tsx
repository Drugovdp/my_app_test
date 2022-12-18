type NamePropsType = {
    name: string
    callBack: ()=>void
}

export const Button = (props: NamePropsType) => {
const onClickHandler = () => {
    props.callBack()
}
  return(
      <div>
          <button className="b1" onClick={onClickHandler}>{props.name}</button>
      </div>
  )
}