import React from "react";

const Cards = (props) => {
  // // 아래의 목록을 이 함수 안에 div 만들어서 밑에 넣어줄 수 있도록 
  // 1. 서버에서 데이터 가져오기
  // 2. 창고에서 데이터 가져오기<store />  <useSelector></useSelector>
  // 위 데이터 활용해서 데이터 가져오기
  // 가져온 데이터 콘솔로 먼저 찍어보기 array 형태인지 어떤 형태인지 알 수 있음 
  // 그 형태에 따라 아래 값 넣어주기

  return (
  <div className="cards">
    <h4>你好</h4>
    <span>[Nǐ hǎo]</span>
    <span style={{fontSize:'16px'}}>안녕</span>
    <span style={{color: 'blue', fontSize: '14px'}}>你好朋友</span>
    <span style={{color: 'blue', fontSize: '14px'}}>안녕 친구들아</span>
  </div>
)
}

export default Cards;