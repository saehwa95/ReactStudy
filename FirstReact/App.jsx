import {useState} from 'react'
import GGFather from './component/GGFather'




function App() {
  let [age,setAge] = useState([100,70, 40, 20, 5]);

  const ButtonClick = () => {
    let newAge = [...age];

    newAge = age.map((value) => (value = Math.floor(Math.random()*100)));
    setAge(newAge);
  }

return(
  <>
    <GGFather age={age} />
    
    <button onClick={ButtonClick}>랜덤으로 나이를 돌려보자</button>
  </>
)
}

export default App;