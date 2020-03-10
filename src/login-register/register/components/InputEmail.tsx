import React from 'react';
interface props{
    handleAdd,page,arr,label,handlePrevPage,
    callbackNav:(callback:(skip:boolean)=>any)=>any
}
export default class InputEmail extends React.Component <props,any>{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.callbackNav(this.callback);
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

    callback=(skip:boolean)=>{
        if(skip){
            //
            
        }else{
            this.handleClick();
        }
    }
    
    render(){
        return(
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label style={{color:"black"}}>{this.props.label}</label><br/><br/> 
                        <input type="email" className="form-control" value={this.arr[this.props.page]===""?this.state.data : this.arr[this.props.page]} onChange={this.handleChange}/><br/>
                    </div>
                </form>
            </div>
        )
    }
}