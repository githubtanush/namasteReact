import User from "./User";
import UserClass from "./UserClass";
// import React   from "react";
import { Component } from "react";
// class About extends React.Component{
class About extends Component{
    //Earlier we write code like this now we have written like functional components
    //now it becomes easier 
    //now react is very good

    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    //why component did mount is there ?
    // Componentdidmount is used to make api calls 
    //how an api call is made ?
    // make it inside componentDidMount()
    //why it is make inside componentDidMount()?
    //

    componentDidMount(){
        console.log("Parent Did mount!!!");
        
        //Now we learn how to make an api call inside this

    }
    render(){
        console.log("Parent Render");
        return (
        <div> 
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
        {/* <User name={"Tanush Arora (function) "}/> */}
            <UserClass name={"First (class) "} location={"Ludhiana (class) "}/>
            <UserClass name={"Second (class) "} location={"Ludhiana (class) "}/>
        </div>
    );
    }
};

export default About;


// now class based component are outdated
/*
 - parent ctor 
 - parent render 
    - Tanush ctor
    - Tanush render
    - Tanush componentDidMount

    - Elon ctor
    - Elon render
    - Elon componentDidMount

- parent componentDidMount 

this is not true as this is not the order not like this order component will render

- parent ctor 
 - parent render 
    - Tanush ctor
    - Tanush render

    - Elon ctor
    - Elon render

    - Tanush componentDidMount
    - Elon componentDidMount

- parent componentDidMount

Now this is the true commit phase which react batch together 
react will batch the render phase and when the render phase is done and then it is 
commit 

render phase is very fast so it will batch together and then render it and then they commit in 
commit phase

*/ 

//about us component is the parent component and userclass is inside the about us component
//there is a class based component it starts loading and now the new instance of this class is created 
//the first thing when the class load is constructor is load 
//once the ctor is called then render is called 