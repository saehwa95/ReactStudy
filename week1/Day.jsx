import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

function Day({day, random}) {

    return (
        <> 
        < div className = "day" > 
        <p>{day}</p>
        <Circle number={0} random={random}/>
        <Circle number={1} random={random}/>
        <Circle number={2} random={random}/>
        <Circle number={3} random={random}/>
        <Circle number={4} random={random}/>
        <Link to={`/Point/${day}`}><div className="triangle"></div>
        </Link>
        </div>
</>
)
}

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${props => props.number <= props.random  ? 'yellow' : 'gray'}
`;



export default Day;