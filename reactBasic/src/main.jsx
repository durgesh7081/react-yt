import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <hi>Custom App !</hi>
    </div>
  )
}
// const q={
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target:'_blank'
//     },
//     children:"click me to visit the Google"
// }
const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)
const anotherUser="chai aur react"
const reactElement=React.createElement(
  'a',
  {href: "https://google.com",target: '_blank'},
  'click me to visit google',anotherElement
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // {/* <App/> */}
   anotherElement
  // </StrictMode>,
)