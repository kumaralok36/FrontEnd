import React from 'react';
import {GoogleComponent} from 'react-google-location';
import ProviderPastSessions from 'providers/body/ProviderPastSessions';

interface props{handleAdd,label,page,arr}
export default class InputGoogleAddress extends React.Component <props,any>{
    constructor(props){
        super(props);

    }
    state={
        data:null
    }
    arr=this.props.arr;
    handleClick=()=>{
        var datan=this.state.data;
        this.setState({data:null},()=>{
            this.props.handleAdd(datan);
        })
    }

    render(){
        return(
            <div className="card-body">
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
                        </div>
                        <input type="button" className="btn btn-info" value="next" onClick={this.handleClick}/>
                    </div>   
                </form>
            </div>
        )
    }
}
