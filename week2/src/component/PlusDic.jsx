import React from "react";
import "../PlusDic.css"
import {Link} from "react-router-dom"


function PlusDic() {
  
  return (
    <div className="App">
      <div className="header">
        <Link to={`/`}>
          <button className="headerTitle">중국어 단어장</button>
        </Link>
      </div>

      <div className="wrap">
        <div className="title">
          <h2>단어 추가하기</h2>
        </div>

        <div className="list">
          <p>단어</p>
          <input type="text" />

          <p>병음</p>
          <input type="text" />

          <p>의미</p>
          <input type="text" />

          <p>예문</p>
          <input type="text" />

          <p>해석</p>
          <input type="text" />

          <div className="saveButton">
            {/* navigation 달아서 onclick 함수 사용하기 앞 페이지로 넘어가는게 아니라 포스팅 작업을 넘겨주는거기때문에!!*/}
            <Link to={`/`}>
              <button className="save">저장하기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PlusDic;