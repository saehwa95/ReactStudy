//라우팅만 관리

import {Routes, Route} from 'react-router-dom'
import PlusDic from "./component/PlusDic"
import Home from "./component/Home"

const App = () => {
  return (
    <>
      <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/PlusDic" element={<PlusDic />}></Route>
      </Routes>
    </>
  );
}


export default App;