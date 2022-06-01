//1. 스토어 파일 생성
//2. 임포트 익스포트
//3. 변수 선언 key:value 형식으로
//4. index.js 파일로 넘어가기
//6. reducer 함수 만들어주기
//7. 스토어 변수 선언
//8. Cards 파일 넘어가기
//12. return state 해주기
import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {db} from "../firebase.js";
import {collection, addDoc, getDocs} from "firebase/firestore";


const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const myState = {
    list: [
        {index: 2, k1: '단어', k2: '병음', k3: '의미', k4: '예문', k5: '해석'}
    ]
};


function reducer(state = myState, action) {
    if (action.type === 'wordLoad') {
        console.log("참 잘하셨어요^_^");
        const loadTempFunc = async () => {
            const data = await getDocs(collection(db, "dictionaryPJ"));
            const newList = [];

            data.forEach((doc) => {
                newList.push({id: doc.id, ...doc.data()});
            });
            console.log(newList);
            return {list: newList}
        }
        loadTempFunc();
    }

    if (action.type === 'wordAdd') {
        const addTempFunc = async () => {
            const data = await addDoc(collection(db, "dictionaryPJ"), action.data);
        }
        addTempFunc();
        const newList = [...state.list, action.data]
        console.log(newList)
        return {list: newList};
    }

    // action
    // type - setWord
    // data - meme_list
    if (action.type === 'setWord') {
        const newList = [...action.data]
        console.log(newList)
        return {list: newList};
    }

    return state;
}

const store = createStore(reducer, enhancer);

export default store;


