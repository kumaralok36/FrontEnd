import React from "react";

let defaultFunc = (v:boolean)=>{};
let LoaderContext = React.createContext(defaultFunc);

export default LoaderContext;