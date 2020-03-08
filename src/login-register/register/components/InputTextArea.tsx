import React from 'react';

interface props{handleAdd,label,page,arr,handlePrevPage}
export default class InputTextArea extends React.Component <props,any>{

    constructor(props){
        super(props);

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

    render(){
        return(
            <div className="card-body">
                <form>
                    <div className="form-group">
                    <label style={{color:"black"}}>{this.props.label}</label><br/><br/>
                    <textarea className="form-control" value={this.props.arr[this.props.page]===""?this.state.data:this.props.arr[this.props.page]} onChange={this.handleChange}></textarea>
                    <input type="button" className="btn btn-info" value="prev" onClick={()=>this.props.handlePrevPage(this.props.page)}/>
                    <input  style={{marginLeft:"1%"}} type="button" className="btn btn-info" value="next" onClick={this.handleClick}/>
                    </div>
                </form>

            </div>
        )
    }

}