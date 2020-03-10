import React from 'react';
import {GoogleComponent} from 'react-google-location';
import ProviderPastSessions from 'providers/body/ProviderPastSessions';

interface props{handleAdd,label,page,arr,handlePrevPage,
    callbackNav:(callback:(skip:boolean)=>any)=>any }
export default class InputGoogleAddress extends React.Component <props,any>{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        this.props.callbackNav(this.callback);
    }
    state={
        data:null,
        list:this.props.arr[this.props.page]===""?[]:this.props.arr[this.props.page]
    }
    arr=this.props.arr;
    handleClick=()=>{
        this.setState({data:null},()=>{
            this.props.handleAdd(this.state.list);
        })
    }
    

    callback=(skip:boolean)=>{
        if(skip){
            //
            
        }else{
            this.handleClick();
        }
    }
    
    getList=()=>{
        return(
            <div>
            {this.state.list.map(list=>(
               <div>{list.place}
               <input type="button" style={{background:"white",margin:"1%",height:"26px"}} value="x" onClick={()=>{this.setState({list:this.state.list.filter(li=>{return(li!==list)})})}}/>
               </div>
            ))}
            </div>
        )
    }
    addToList=(data)=>{
     if(data!=null)
     {
         this.state.list.push(data);
         this.setState({
             data:null
         },()=>{
            console.log(this.state.data);
         })
         
     }   
     
    }
    render(){
        console.log("list address "+this.state.list.place);
        return(
            <div className="card-body">
                {this.getList()}
                <form>
                    <div className="form-group">
                        <label style={{color:"black"}}>{this.props.label}</label>
                        <div>
                            <GoogleComponent
                            apiKey={'AIzaSyDDGLzjJ_1MmXB_54zqHguerZQXGKicw8k'}
                            language="en"
                            country={'country:in|country:us'}
                            coordinates={true}
                            onChange={(e)=>{this.setState({data:e})}}/>
                        </div><br/>
                        <input type="button" className="btn btn-info" value="Add" onClick={()=>this.addToList(this.state.data)}/>
                    </div>   
                </form>
            </div>
        )
    }
}
