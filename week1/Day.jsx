import React from "react";
import styled from "styled-components";

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
        <div className=" triangle">
        </div>
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


// for(let i =0; i < random; i++) {
//   동그라미까지 칠해줘

// }


export default Day;