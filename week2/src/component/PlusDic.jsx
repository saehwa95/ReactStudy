import React, { useRef } from "react";
import "../PlusDic.css"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";


function PlusDic() {
  const plusDispatch = useDispatch()
  const ref1=useRef()
  const ref2=useRef()
  const ref3=useRef()
  const ref4=useRef()
  const ref5=useRef()

  function addDibtionary() {
    const word = {index: new Date(), k1:ref1.current.value, k2:ref2.current.value, k3:ref3.current.value, k4:ref4.current.value, k5:ref5.current.value}
    plusDispatch({type:"wordAdd", data:word})
  }
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
          <input type="text" ref={ref1}/>

          <p>병음</p>
          <input type="text" ref={ref2}/>

          <p>의미</p>
          <input type="text" ref={ref3}/>

          <p>예문</p>
          <input type="text" ref={ref4}/>

          <p>해석</p>
          <input type="text" ref={ref5}/>

          <div className="saveButton">
            {/* navigation 달아서 onclick 함수 사용하기 앞 페이지로 넘어가는게 아니라 포스팅 작업을 넘겨주는거기때문에!!*/}
            <Link to={`/`}>
              <button onClick={addDibtionary} className="save" >저장하기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PlusDic;