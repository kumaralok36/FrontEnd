import React from'react';

interface props{label,information,handleAdd,page,handlePrevPage,
    callbackNav:(callback:(skip:boolean)=>any)=>any }
export default class InputInformation extends React.Component <props,any>{
constructor(props){
    super(props);
}

componentDidMount(){
    this.props.callbackNav(this.callback);
}

callback=(skip:boolean)=>{
    if(skip){
        //
        
    }else{
        this.handleClick();
    }
}

handleClick=()=>{
    this.props.handleAdd("read");
}
render(){
    return(
        <div className="card-body">
            <label style={{color:"black"}}>{this.props.label}</label><br/><br/>
            <p>{this.props.information}</p>
        </div>
    )
}

}