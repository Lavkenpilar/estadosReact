import React from 'react'
import { useState } from 'react'

const Contador = () => {
    const [cuenta, setCuenta] = useState (0)
  return (     
    <button onClick={()=>console.log("hola")}>Cuenta:0</button>
  )
}

export default Contador