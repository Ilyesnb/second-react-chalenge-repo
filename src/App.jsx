import './App.css'
import Client from './components/Client'
import Menu from './components/Menu'
import React,{useState} from "react"
function App() {
  const [msg,setMsg]=useState("")
  return (
    <div className="App">
      <Client sendData={(m)=>{setMsg(m)}} demande={msg} />
      <div className='mur'/>
      <Menu/>
     </div>
  )
}

export default App
