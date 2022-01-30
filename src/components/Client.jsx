import React, { useState } from 'react';
const Client = ({sendData,demande}) => {
    const [data, setData] = useState("")
    const clientRequest = () =>{
        if(data==="café"){
            return "voilà votre demande café"
        }else if(data==="expresso"){
            return "voilà votre demande expresso"
        }else if(data=="cappucino"){
            return "voilà votre demande cappucino"
        }else if(data==="iced"){
            return"voilà votre demande iced"
        }else return`désolé ${data} n'existe pas dans notre menu`
    }
    const handelChange = (event) =>{
        setData(event.target.value)

    }
    const handelClick = () =>{
        sendData(clientRequest)
        setData(" ")

    }
    return (
        <div className="container">
            <h1>client</h1>
            <p>je veux:</p>
            <input className='demande' type="text" placeholder='ecrivez votre demande' onChange={handelChange} value={data}/>
            <input className="bottun" type="submit" onClick={handelClick}/>
            <p>serveur:</p>
            <p>{demande}</p>
        </div>
    );
};

export default Client;