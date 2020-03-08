import React from 'react';
interface props{handleAdd,page,label,arr,handlePrevPage}
export default class InputText extends React.Component<props,any>{
    state={
        data:""
    }
   arr=this.props.arr
    handleChange=(e)=>{
        this.setState({data:e.target.value});
    }

    handleClick=()=>{
        var datan=this.state.data;
      
      this.setState({data:""},()=>{
        this.props.handleAdd(datan);
      })
    }
  componentDidMount(){
      this.setState({data:""})
  }
    render(){
        return(
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label style={{color:"black"}}>{this.props.label}</label><br/><br/>
                            <input type="text" className="form-control" placeholder="Your answer" value={this.arr[this.props.page]===""?this.state.data:this.arr[this.props.page]} onChange={(e)=>this.handleChange(e)}/><br/><br/>
                            <input type="button" value="prev" className="btn btn-info" onClick={()=>this.props.handlePrevPage(this.props.page)}/>
                            <input type="button"  style={{marginLeft:"1%"}} value="next" className="btn btn-info" onClick={this.handleClick}/>
                        </div>
                    </form>
                </div>
        
        )
    }
}