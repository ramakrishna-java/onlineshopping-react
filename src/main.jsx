import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {App} from './App.jsx'
//import App from './01_welcome/App.jsx'
//import App from './02_component_Reuse/App.jsx'
//import App from './03_properties/App.jsx'
//import App from './04_Events/App.jsx'
//import App from './05_State/App.jsx'
//import App from './06_ref/App.jsx'
//import App from './07_propType/App'
//import App from './08_LifeCycleOfComponent/App.jsx'
//import App from './09_composableComponents/App.jsx'
//import App from './09a_composableComponents_Json-Server/App.jsx'
//import App from './10_hoc/App.jsx'
import App from './11_renderProps/App.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <App />
  //</StrictMode>,
)
