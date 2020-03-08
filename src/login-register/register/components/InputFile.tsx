import React from 'react'

interface props{handleAdd,arr,label,page,handlePrevPage}
export default class InputFile extends React.Component <props,any>{
    constructor(props){
        super(props);

    }
    
    state={
        data:this.props.arr[this.props.page]===""?"":this.props.arr[this.props.page]
    }
    handleChange=(e)=>{
        let files=e.target.files;
        let reader=new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=(e)=>{
            console.log(e.target.result);
            this.setState({data:files[0].name});
        }
    }
    getList=()=>{
        return(
            <div>
            
               <div style={{}}>{this.state.data}
               {/* <input type="button" style={{margin:"1%",height:"26px",border:"1px solid white"}} value="x" onClick={()=>{this.setState({list:this.state.list.filter(li=>{return(li!==list)})})}}/> */}
               </div>
            
            </div>
        )
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
                {this.getList()}
                <label style={{color:"black"}}>{this.props.label}</label><br/>
                <input type="file"  className="btn btn-info" onChange={(e)=>this.handleChange(e)} style={{background:"white",color:"blue"}}/><br/><br/>
                <input type="button" className="btn btn-info" value="prev" onClick={()=>this.props.handlePrevPage(this.props.page)}></input>
                <input  style={{marginLeft:"1%"}} type="button" className="btn btn-info" value="next" onClick={this.handleClick}/>
            </div>
        )
    }
}