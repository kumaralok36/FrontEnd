import React from 'react';
interface props{handleAdd,page,arr,label}
export default class InputEmail extends React.Component <props,any>{

    constructor(props){
        super(props);
    }
    
    state={
        data:""
    }
    
    arr=this.props.arr;
    handleChange=(e)=>{
        this.setState({
            data:e.target.value
                });
    }

    handleClick=()=>{
        var datan=this.state.data;
        this.setState({
            data:""
        },()=>{
            this.props.handleAdd(datan);
        })
    }
    render(){
        return(
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label style={{color:"black"}}>{this.props.label}</label> 
                        <input type="email" className="form-control" value={this.arr[this.props.page]===""?this.state.data : this.arr[this.props.page]} onChange={this.handleChange}/><br/>
                        <input type="button" value="next" className="btn btn-info" onClick={this.handleClick}/>
                    </div>
                </form>
            </div>
        )
    }
}