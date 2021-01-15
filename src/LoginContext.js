import React,{createContext,useState,useEffect} from 'react'


export const LoginContext=createContext();


export const LoginProvider =  props =>{

    const[loginstatus,setLoginstatus] = useState({
        userEmail:'',
        logged:false,
        name:''
    })

    useEffect(() => {
        getLogin();    
    }, [])

    useEffect(() => {
        localStorage.setItem('login',JSON.stringify(loginstatus))
    }, [loginstatus])

    const getLogin = () => {
        if(localStorage.getItem('login') === null){
          localStorage.setItem('login',JSON.stringify([]));
        }
        else{
          let local= JSON.parse(localStorage.getItem('login'));
          setLoginstatus(local);
        }
      } 
    return(
        <LoginContext.Provider value={[loginstatus,setLoginstatus]}>
            {props.children}
        </LoginContext.Provider>
    )
} 


