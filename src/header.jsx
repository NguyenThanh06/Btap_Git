import react, { useState } from "react";
function Header (props){
    return(
        <div>
            <h1>This is {props.appName} </h1>
        </div>
    )
}
function Main(){
    const [name, setName]= useState('');
    const handleclick = (e) =>{
        setName(e.target.value);
    };
    return( 
        <>
        <Header/> 
        <h1>Đây là hàm {name}</h1>
        <input type="text" value={name} onChange={handleclick}/>
        
        </>
        
    );
}
export  {Header, Main};