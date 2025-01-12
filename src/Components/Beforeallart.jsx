import { useLoaderData } from "react-router-dom";
import Allartandcraft from "./Allartandcraft";


const Beforeallart = () => {
    const users=useLoaderData()
    console.log(users);
    return (
        <div>
            {
                
                users?.map(user=><Allartandcraft key={users.id} userinfo={user}></Allartandcraft>)
            }
            
        </div>
    );
};

export default Beforeallart;