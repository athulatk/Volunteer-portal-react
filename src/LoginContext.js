import React,{createContext,useState} from 'react'


export const LoginContext=createContext();


export const LoginProvider =  props =>{

    const[loginstatus,setLoginstatus] = useState({
        userEmail:"",
        logged:false
    })

    return(
        <LoginContext.Provider value={[loginstatus,setLoginstatus]}>
            {props.children}
        </LoginContext.Provider>
    )
} 


