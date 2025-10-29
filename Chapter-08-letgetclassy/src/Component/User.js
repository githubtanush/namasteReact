import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(0);

    //In functional component we have api calls inside useEffect 
    useEffect = (() =>{
        //make api calls inside useEffect
        //how to make an api call inside functional based component ?
        //we make async function 
        // async getUserInfo(){
        // const data = await data.json();
        // }

        //It won't stop if move to contact page /about page 
        const timer = setInterval(() =>{
            console.log("Namaste React OP");
        },1000);

        console.log("useEffect");

        return () => {
            clearInterval(timer);
            console.log("useEffect Return");
        };

    },[]);
    console.log("render");
    
//render 
//useEffect 
//useEffect return 


    //why we make api calls under useEffect in functional component?
    // In react component if u will make the api calls we don't wait to return the api data 
    //so we want to render the data and then quickly api call and fill the data by re-render

    return <div className="user-card">
        <h1>Count : {count}</h1>
        <h1>Count : {count2}</h1>
        <h2>Name : {name}</h2>
        <h3>Location : Ludhiana</h3>
        <h4>Contact : tanush935@gmail.com</h4>
    </div>
}
export default User;