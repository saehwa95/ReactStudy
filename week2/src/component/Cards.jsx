import React from "react";

const Cards = (props) => {

  //9. cardData 변수 선언 하고 uswSelector 사용
  //10. 임포트 익스포트 useSelector
  //11. div 태그 안에 내용 받아야하는 것들 {} 사용해서 값 넣어주기

  return (
  <div className="cards">
    <h4>{props.sendData.k1}</h4>
    <span>{props.sendData.k2}</span> 
    <span style={{fontSize:'16px'}}>{props.sendData.k3}</span>
    <span style={{color: 'blue', fontSize: '14px'}}>{props.sendData.k4}</span>
    <span style={{color: 'blue', fontSize: '14px'}}>{props.sendData.k5}</span>
  </div>
)
}

export default Cards;