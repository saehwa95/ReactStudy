import React from "./PlusDic";
import "../Home.css"
import {Link} from "react-router-dom";
import Cards from "./Cards";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";

function Home() {

    const cardData = useSelector((data) => data.list);

    const loadDispatch = useDispatch()
    const initDispatch = useDispatch()
    useEffect(() => {
        loadDispatch({type: "wordLoad"})
        loadFBData();
    },[])


    async function loadFBData(){
        const data = await getDocs(collection(db, "dictionaryPJ"));
        let meme_list = [];
        data.forEach((doc) => {
            meme_list.push({id: doc.id, ...doc.data()});
        });
        initDispatch({type: "setWord", data: meme_list});
        console.log(meme_list);
    }

    return (
        <div className="App">
            {console.log({cardData})}
            <div className="header">
                <Link to={`/`}>
                    <button className="headerTitle">중국어 단어장</button>
                </Link>
            </div>
            <div className="wrap">
                <div className="card-box">
                    {cardData.map((data, idx) => <Cards key={idx} sendData={data}/>)}
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