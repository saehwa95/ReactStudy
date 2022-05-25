import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";
import Day from "./Day";

function Home(){
  const day = ["화", "수", "목", "금", "토", "월", "일"]
  const random = [Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5)
                  ]

  const sum = random[0]+random[1]+random[2]+random[3]+random[4]+random[5]+random[6]+7

  let [aver, setAver] = useState((sum / 7).toFixed(1));

  const goReset = () => {
    setAver(() => aver = 0);
  }


  return(
        <div className="App">
          <div className="wrap">
            <h3>내 일주일은?</h3>
            <Day day={day[0]} random={random[0]}/>
            <Day day={day[1]} random={random[1]}/>
            <Day day={day[2]} random={random[2]}/>
            <Day day={day[3]} random={random[3]}/>
            <Day day={day[4]} random={random[4]}/>
            <Day day={day[5]} random={random[5]}/>
            <Day day={day[6]} random={random[6]}/>
              <div className="point">
                <p>평균 평점</p>
                <p>{aver}</p>
              </div>
            <ResetButton onClick={goReset}>Reset</ResetButton>
          </div>
        </div>
  );
}

const ResetButton = styled.button`
  width: 128px; 
height: 60px; 
background-color: dodgerblue; 
border-radius: 6px; 
text-align: center; 
line-height:45px;
margin: auto;
block-size: 50px;
display: block;
cursor: pointer;
color: white;
font-size: 18px;
border: none;
`;

export default Home;