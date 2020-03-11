import React from 'react';

interface props{handleAdd,label,page,arr,handlePrevPage,
    callbackNav:(callback:(skip:boolean)=>any)=>any }
export default class InputTextArea extends React.Component <props,any>{

    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.callbackNav(this.callback);
    }

    state={
        data:""
    }

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
                <form onSubmit={this.handleClick}>
                    <div className="form-group">
                    <label style={{color:"black"}}>{this.props.label}</label><br/><br/>
                    <textarea className="form-control" value={this.props.arr[this.props.page]===""?this.state.data:this.props.arr[this.props.page]} onChange={this.handleChange}></textarea>
                    </div>
                </form>

            </div>
        )
    }

}