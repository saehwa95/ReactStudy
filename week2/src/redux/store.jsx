//1. 스토어 파일 생성
//2. 임포트 익스포트
//3. 변수 선언 key:value 형식으로
//4. index.js 파일로 넘어가기
//6. reducer 함수 만들어주기
//7. 스토어 변수 선언
//8. Cards 파일 넘어가기
//12. return state 해주기
import {createStore} from 'redux'

const myState = {
  list : [
  {index:0, k1:'단어', k2:'병음', k3:'의미', k4:'예문', k5:'해석'},
  {index:1, k1:'단어', k2:'병음', k3:'의미', k4:'예문', k5:'해석'},
  {index:2, k1:'단어', k2:'병음', k3:'의미', k4:'예문', k5:'해석'}
]
};

function reducer(state = myState, action) {
  if(action.type === 'wordAdd') {

    const newList = [...state.list, action.data]

    return {list:newList};
  } 
    return state;
}

const store = createStore(reducer);

export default store;