import React from 'react';
interface props{handleAdd,page,label,type,arr}
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
                            <label style={{color:"black"}}>{this.props.label}</label><br/>
                            <input type={this.props.type} className="form-control" placeholder="Your answer" value={this.arr[this.props.page]===""?this.state.data:this.arr[this.props.page]} onChange={(e)=>this.handleChange(e)}/>
                            <input type="button"  value="next" className="btn btn-info" onClick={this.handleClick}/>
                        </div>
                    </form>
                </div>
        
        )
    }
}