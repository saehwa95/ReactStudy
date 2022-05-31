import React from "./PlusDic";
import "../Home.css"
import { Link } from "react-router-dom";
import Cards from "./Cards";
//import styled from "styled-components";

function Home(){

  return(
    <div className="App">
      <div className="header">
        <Link to={`/`}>
          <button className="headerTitle">중국어 단어장</button>
        </Link>
      </div>
      <div className="wrap">
        <div className="card-box">
        <Cards />
        </div>
      </div>
      <div className="plus-button">
          <Link to={`/PlusDic`}>
            <button>+</button>
          </Link>
      </div>
  </div>
  );
}


export default Home;