import { useRouteError } from "react-router"; 
//useRouteError gives us the information about error
//useRouteError given by react-router-dom it is the useRoute Error which gives the more information 
//about error
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div> 
            <h1>OOPS!!!</h1>
            <h2>Something went wrong!!!</h2>
        </div>
    );
};
export default Error;
