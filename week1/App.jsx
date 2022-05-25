// 라우팅만 관리 

import {Routes, Route} from 'react-router-dom'
import Point from "./component/Point"
import Home from "./component/Home"

const App = () => {
  return (
    <>
      <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/Point/:day" element={<Point />}></Route>
      </Routes>
    </>
  );
}


export default App;