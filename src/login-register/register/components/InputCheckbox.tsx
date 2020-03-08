import React from 'react';

interface props{handleAdd,page,label,type,arr,handlePrevPage}
export default class InputCheckbox extends React.Component <props,any>{
    constructor(props){
        super(props);

    }
    arr=this.props.arr
    state={
        data:false
    }

    handleChange=(e)=>{
        this.setState({
            data:!(this.state.data)
        });
    }

    handleClick=()=>{
        var datan=this.state.data;
        this.setState({data:""},()=>{
            this.props.handleAdd(datan);
        })
    }

    render(){
        return(
            <div className="card-body">
                
                <div className="custom-control custom-checkbox">
                     <input style={{marginRight:"1%"}} className="checkbox" type={this.props.type} checked={this.arr[this.props.page]===false||this.arr[this.props.page]===""?this.state.data : this.arr[this.props.page]} onClick={this.handleChange}/>
                    <label style={{color:"black",marginLeft:"1%"}}>{this.props.label}</label><br/><br/>
                    <input type="button" value="previous" className="btn btn-info" onClick={()=>this.props.handlePrevPage(this.props.page)}/>
                    <input  style={{marginLeft:"1%"}} type="button"  value="next" className="btn btn-info" onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}