/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>hey chai !!</h1>
    </div>
  )
}
//it wont work syntax not correct
// const ReactElement = {
//   type :'a',
//   props :{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'clck me to visit google'
// }

// const anotherElement = (
 
//     <a href="https://google.com" target='_blank'>visit google</a>
//   )
/*
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'  },
  'click me to visit google'
)
*/
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

<App />
/*MyApp()*/
// anotherElement

//reactElement
)
