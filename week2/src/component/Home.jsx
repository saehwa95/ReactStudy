import React from "./PlusDic";
import "../Home.css"
import { Link } from "react-router-dom";
import Cards from "./Cards";
import {useSelector} from "react-redux";

function Home(){

  const cardData = useSelector((data) => data.list);

  return(
    <div className="App">
      <div className="header">
        <Link to={`/`}>
          <button className="headerTitle">중국어 단어장</button>
        </Link>
      </div>
      <div className="wrap">
        <div className="card-box">
          {cardData.map((data)=><Cards key={data.index} sendData={data}/>)}
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