import GFather from "./GFather";


const GGFather = (props) => {
  return (
    <>
        <p>I AM GGFather = AGE: {props.age[0]}</p>
        <GFather age={props.age} />
    </>
  )
}

export default GGFather;