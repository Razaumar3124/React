import { useState } from "react"
import JsxIntro from "./Components/JsxIntro"
import UseStateIntro from "./Components/TypesOfComponents/Hooks/UseStateHook/UseStateIntro"
import PropsIntro from "./Components/Props/PropsIntro"
import ModuleIntro from "./Components/ModuleCss/ModuleIntro"
import EventsIntro from "./Components/Events/EventsIntro"
import UseEffectIntro from "./Components/useEffectHook/examples/UseEffectIntro"
import ContextApiIntro from "./Components/Context api/ContextApiIntro"
import DataFlowIntro from "./Components/Dataflow/DataFlowIntro"
import UseRefIntro from "./Components/UseRefHook/UseRefIntro"
import UseReducerIntro from "./Components/UseReducerHook/UseReducerIntro"

let App = ()=>{
  return (

    // Jsx Intro Topics 
    // <div>
    //   <JsxIntro/>
    // </div>

// ------------------------------------------------------------------------------------------------------------------------------

    // Hooks
    // useState hook
    // <UseStateIntro/>

// ---------------------------------------------------------------------------------------------------------------------------------
    //Props
    // <PropsIntro/>

// ------------------------------------------------------------------------------------------------------------------------------
    // Css styling
    // <ModuleIntro/>

// -------------------------------------------------------------------------------------------------------------------------------
    // Events
    // <EventsIntro/>    

// ----------------------------------------------------------------------------------------------------------------------------
    // UseEffectHook
    // <UseEffectIntro/>

// -------------------------------------------------------------------------------------------------------------------------
    // Context Api 
    // <ContextApiIntro/>

// --------------------------------------------------------------------------------------------------------------------------
    // DataFlow in react
    // <DataFlowIntro/>

// ------------------------------------------------------------------------------------------------------------------------------
    // UseRef hook
    // <UseRefIntro/>

// ---------------------------------------------------------------------------------------------------------------------------
    // UseReducer hook
    <UseReducerIntro/>
)
}
export default App