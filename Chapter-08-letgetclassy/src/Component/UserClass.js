import React from "react"
class UserClass extends React.Component{
    constructor(props){
        //In a class based component this constructor is the best place to create state variables 
        super(props);
        //behind the scenes react will create a big object for it and saves it in that 
        this.state = {
            count : 0,
            count2 : 1,
            userInfo : {
                name : "Dummy",
                location : "Default",
                avatar_url : "https://dummy-photo.com",
            },
        }; 
        console.log(props);
        console.log(this.props.name + "child ctor");
    }

    //Life cycle - ctor -> component did mount -> render

    //this is the another which reactclass gives us is :- 
    async componentDidMount(){
        // console.log(this.props.name + "Child component did mount!!!");
        //This is why because we cannot wait for return the api call 
        //that was why we make an api call over here 
        //Now how to make an api call inside our class based component?
        
        //Now we see how to make an api call inside a class component  
        //In class based component we make component did mount function as async function
        // const data = await fetch("https://api.github.com/users/githubtanush")
        // const json = await data.json();

        // this.setState({
        //     userInfo : json,
        // });
        // console.log(json);

        // this.timer = setInterval(() =>{
        //     //It is just calling this whether you will go to 
        //     //the home page and this is very bad thing but this is a single page application
        //     //React just reconciling the things it is not go to other page 
        //     //because react is a single page application
        //     console.log("Namaste React OP");
        // },1000)
        // console.log("child - componentDidMount");
    }

    componentDidUpdate(prevprops,prevState){
        if(this.state.count !== prevState.count
            // this.state.count !== prevState.count
            ){

        }
        if(this.state.coutn2 !== prevState.count2){

        }
            console.log("Component did update");
    }

    componentWillUnmount(){
        //use of component will unmount 
        //it will give us when we leaving the page 
        //React is a single page application
        //their i use clear interval when i unmount the function
        // clearInterval(this.timer);
        console.log("Component will unmount");
    }

    render(){
        // const {name,location} = this.props;
        // const {count,count2} = this.state;

        // console.log(this.props.name + "child render");
        const {name,location,avatar_url} = this.state.userInfo;

        return <div className="user-card">
        {/* <h1>Count : {count}</h1>
        <button onClick={() => { 
            // This is not the write way to update the state variables 
            //A lot of react developers make this mistake
            // NEVER DIRECTLY UPDATE YOUR STATE VARIABLES
            // this.state.count = this.state.count + 1;

            //React will given u a very powerful function called this.setState 
            //you can use this.setState anywhere from the class

            this.setState({
                //behind the scene when setState called react will take this object
                // into a big object and suppose you are also sending count3 count4 count5 there
                //but it will update only count and count2

                //whenever this onclick button is clicked react will retrigger it's reconcilation of the 
                //process it will find the diff of that object it will update the state variables and 
                //re-render the component

                //What are react component life cycle methods most important interview questions
                count : this.state.count + 1,
                count2 : this.state.count2 + 1,
            });
             
        }}>countIncrease</button>
        <h1>Count2 : {count2}</h1>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : tanush935@gmail.com</h4> */}
        <img src={avatar_url} />
        <h2>Name : {name} </h2>
        <h3>Location : {location}</h3>
        <h4>Contact : tanush935@gmail.com </h4>

    </div>
    }
}//This is a class based component

//functional component is basically a function that returns some piece of jsx 

//A class based component is the class which extends React.component and it has a render method
//that return some piece of jsx and this jsx further now can be converted into html and display into website 

//React.component has come with react
//class based component is equivalent to the functional component

export default UserClass;


//Lifecycle of this classbased react component

/*

    ctor (dummy)
    render (dummy)
        <HTML dummy>
    componentDidMount
        <API call>
        <this.setState> -> State variable is updated
    Update
        render(API data)
        <HTML (new API data>)
        componentDidUpdate

*/