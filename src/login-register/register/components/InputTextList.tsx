import React from 'react';

interface props{label,arr, handleAdd,page,handlePrevPage,
    callbackNav:(callback:(skip:boolean)=>any)=>any }
export default class InputTextList extends React.Component <props,any>{

    constructor(props){
        super(props);

       // this.removeLanguage=this.removeLanguage.bind(this);
    }

    componentDidMount(){
        this.props.callbackNav(this.callback);
    } 

    state={
        data:[],
        list:this.props.arr[this.props.page]===""?[]:this.props.arr[this.props.page]
    }
     listnum:0;
     getList=()=>{
         return(
             <div>
             {this.state.list.map(list=>(
                <div style={{}}>{list}
                <input type="button" style={{margin:"1%",height:"26px",border:"1px solid white",borderRadius:"4px"}} value="x" onClick={()=>{this.setState({list:this.state.list.filter(li=>{return(li!==list)})})}}/>
                </div>
             ))}
             </div>
         )
     }

     callback=(skip:boolean)=>{
        if(skip){
            //
            
        }else{
            this.handleClick();
        }
    }
    
     handleChange=(e)=>{
         this.setState({
             data:e.target.value
         });
     }
    // removeLanguage=(li)=>{
    //     this.list=this.list.filter(list=>{
    //         return(list!==li);
    //     })
    // }

     addToList=(data)=>{
         if(data!="")
         {
             this.state.list.push(data);
       this.setState({
           data:this.state.data
       })
      }
     }
 
    handleClick=()=>{
     var listn=this.state.list;
     this.setState({
         data:""
     },()=>{
         this.props.handleAdd(listn);
     })
    }
     render(){
         console.log(this.state.list)
         return(
             <div className="card-body">
                 {this.getList()}
                 <form style={{marginTop:"4%"}}> 
                     <div className="form-group">
                        <label style={{color:"black"}} >{this.props.label}</label><br/><br/>
                        <input type="text"  className="form-control" value={this.state.data} onChange={this.handleChange}/><br/>
                        <input type="button" className="btn btn-info" value="Add" onClick={()=>this.addToList(this.state.data)}/>
                        <input type="button" value="prev" className="btn btn-info" onClick={()=>this.props.handlePrevPage(this.props.page)} style={{marginLeft:"1%"}} />
                        <input type="button" className="btn btn-info" value="Next" onClick={this.handleClick} style={{marginLeft:"1%"}}/>
                     </div>
                 </form>
             </div>
         )
     }
}