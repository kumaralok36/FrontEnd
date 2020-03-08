import React from'react';

interface props{label,information,handleAdd,page,handlePrevPage}
export default class InputInformation extends React.Component <props,any>{
constructor(props){
    super(props);
}

render(){
    return(
        <div className="card-body">
            <label style={{color:"black"}}>{this.props.label}</label><br/><br/>
            <p>{this.props.information}</p>
            <input type="button" value="prev" className="btn btn-info" onClick={()=>this.props.handlePrevPage(this.props.page)}/>
            <input  style={{marginLeft:"1%"}} type="button" value="next" className="btn btn-info" onClick={()=>this.props.handleAdd("")}/>
        </div>
    )
}

}