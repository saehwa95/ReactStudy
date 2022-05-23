import Father from "./Father";


const GFather = (props) => {
  return (
    <>
        <p>I AM GFather = AGE: {props.age[1]}</p>
        <Father age={props.age}/>
    </>
  )
}

export default GFather;