import GSon from "./GSon";


const Son = (props) => {
  return (
    <>
        <p>I AM Son = AGE: {props.age[3]}</p>
        <GSon age={props.age}/>
    </>
  )
}

export default Son;