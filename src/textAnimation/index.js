import React from 'react'
import {Text1, Text2, Text3} from "./components.js"

const MainText = () => {

  return (
    <div className="main-container">
      <h1 className='heading'>Text animation</h1>
      <div className='sub-main-container'>
       <Text1/>
       <Text2/>
       <Text3/>
      </div>
    </div>
  )
}

export default MainText