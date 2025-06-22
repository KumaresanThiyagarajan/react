import { createContext } from "react";

const context = createContext();

const UserContext =({Children})=>{
    const user ={name:"kumaresan",phn:"6383636612"}
    return(
        <context.Provider value={user}>
            {children}
        </context.Provider>
    )
}