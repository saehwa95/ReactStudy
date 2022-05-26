import React, { useState } from "react";
import styled from "styled-components";
import "../Point.css";
import {Link, useParams} from "react-router-dom"

const Point = (props) => {
  const {day} = useParams();

  const [circleScore, setCircleScore] = useState(0);
  const onClickCircle = (event) => {
    let circledId = event.target.id;
    setCircleScore(circledId);
    console.log(circledId)
  }

    return(
      <div className="Detail">
        <h3><span>{day}요일</span>평점 남기기</h3>
          <div className="Circles">
          <Circle id="1" onClick={onClickCircle} score={circleScore}/>
          <Circle id="2" onClick={onClickCircle} score={circleScore} />
          <Circle id="3" onClick={onClickCircle} score={circleScore} />
          <Circle id="4" onClick={onClickCircle} score={circleScore} />
          <Circle id="5" onClick={onClickCircle} score={circleScore} />
          </div>
        <Link to={`/`} style={{textDecoration:"none"}}>
          <button className="Point">평점 남기기</button>
        </Link>
      </div>
    );
}
  

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #ddd;
  margin: 5px;
  margin-bottom: 15px;
  float:left;

  &:nth-child(1){
    background-color: ${props => props.score >= 1 ? 'yellow' : 'gray'} ;
  }

  &:nth-child(2){
    background-color: ${props => props.score >= 2 ? 'yellow' : 'gray'} ;
  }

  &:nth-child(3){
    background-color: ${props => props.score >= 3 ? 'yellow' : 'gray'} ;
  }

  &:nth-child(4){
    background-color: ${props => props.score >= 4 ? 'yellow' : 'gray'} ;
  }

  &:nth-child(5){
    background-color: ${props => props.score >= 5 ? 'yellow' : 'gray'} ;
  }
`;

export default Point;