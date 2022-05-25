import React from "react";
import styled from "styled-components";
import "../Point.css";
import {Link, useParams} from "react-router-dom"

const Point = (props) => {
  const {day} = useParams();
    return(
      <div className="Detail">
        <h3><span>{day}요일</span>평점 남기기</h3>
          <div className="Circles">
          <Circle />
          <Circle />
          <Circle />
          <Circle />
          <Circle />
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
`;


export default Point;