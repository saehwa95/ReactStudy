import Son from "./Son";


const Father = (props) => {
  return (
    <>
        <p>I AM Father = AGE: {props.age[2]}</p>
        <Son age={props.age}/>
    </>
  )
}

export default Father;