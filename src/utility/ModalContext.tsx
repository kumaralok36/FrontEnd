import React from "react";

let defaultFunc = (component:React.Component, callback:()=>any)=>{};
let ModalContext = React.createContext(defaultFunc);

export default ModalContext;