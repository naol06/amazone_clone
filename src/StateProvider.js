
import React,{createContext,useContext,useReducer} from "react";
//Preparing Data Layer 
export const stateContext=createContext();
//Wrap the whole application and provide the data layer
export const StateProvider=({reducer,initialState,children})=>(
<stateContext.Provider value={useReducer(reducer,initialState)}>
{children}
</stateContext.Provider>

);
//push or pull data to the data layer
export const useStateValue=()=>useContext(stateContext);