import React from "react";
//import styled from "styled-components";
//import Main from "./Main";
import "./App.css";
//import Main from "./component/Main"
//import Point from "./component/Point";
//import {BrowserRouter, Route} from "react-router-dom"
import Day from "./component/Day";

function App(){
  const day = ["월", "화", "수", "목", "금", "토", "일"]
  //const random = Math.floor(Math.random()*5);
  const random = [Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5),
                  Math.floor(Math.random()*5)
                  ]

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
                <p>2.7</p>
            </div>
            <button className="reset">Reset</button>
      </div>
    </div>
  );
}

export default App;