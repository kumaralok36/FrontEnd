import React from 'react';
import InputText from '../InputText';
import { ProviderRegistrationQuestions } from 'utility/provider-onboard/ProviderRegistrationQuestions';
import { ProviderQuestionTypes } from 'utility/provider-onboard/ProviderQuestionTypes';

export default class ProviderRegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.arrQuestion=ProviderRegistrationQuestions;
    }

    state={
        data:"",
        page:0,
    }
 arr=["","","","","","",""];
 arrQuestion=[];
handleAdd=(data1)=>{
this.setState({
    page:(this.state.page)+1,
    data:data1
   },()=>{
    this.arr[this.state.page-1]=data1;
    console.log(this.arr);
});
}

handleChangePage=(i)=>{
    if(i>=0 && i<=5)
    this.setState({page:i});
}

getComponent=()=>{

 var question=this.arrQuestion[this.state.page];

    
    if(question.inputType===ProviderQuestionTypes.EmailField)
       return <InputText handleAdd={this.handleAdd} type="email" label={question.heading} page={this.state.page} arr={this.arr}/>
//   if(this.state.page===0)
//   return <InputText handleAdd={this.handleAdd} type="email" label="Enter your email *" page={this.state.page} arr={this.arr}/>
//   else if(this.state.page===1)
//   return <InputText handleAdd={this.handleAdd} type="text" label="Full name and title *" page={this.state.page} arr={this.arr}/>
//   else if(this.state.page===2)
//   return <InputText handleAdd={this.handleAdd} type="tel" label="Phone number *" page={this.state.page} arr={this.arr}/>
//   else if(this.state.page===3)
//   return <InputText handleAdd={this.handleAdd} type="text" label="Language(s) spoken / skill level *" page={this.state.page} arr={this.arr}/>
//   else if(this.state.page===4)
//   return <InputText handleAdd={this.handleAdd} type="text" label="Please list your license and/or certification type(s) by location(s) for telehealth & geographic service areas if you plan to opt-in to provide on-site services." page={this.state.page} arr={this.arr}/>
//   else if(this.state.page===5)
//   return <InputText handleAdd={this.handleAdd} type="text" label="Please list your active and valid healthcare license(s) and/or coaching certificates. Include the contact information for primary-source validation of each document.*" page={this.state.page} arr={this.arr}/>
}

render(){
    return(
        <div className="container col-sm-7">
            <div className="card">
                <div className="card-header">
                    <h3>Futura.Health Registration</h3>
                    <div>Sign up to receive more information about becoming a provider in the Futura.Health ecosysteming, including Therapy on Demand</div>
                    <div style={{color:"red"}}>required*</div>  
                </div>
                {this.getComponent()}
            </div>
            <ul className="pagination">
                <li className={this.state.page===0?"disabled":""}><a href="#" onClick={()=>this.handleChangePage(this.state.page-1)}>Previous</a></li>
                <li style={{marginLeft:"2%"}}><a href="#" onClick={()=>this.handleChangePage(1)}>1</a></li>
                <li style={{marginLeft:"1%"}}><a href="#"onClick={()=>this.handleChangePage(2)}>2</a></li>
                <li style={{marginLeft:"1%"}}><a href="#"onClick={()=>this.handleChangePage(3)}>3</a></li>
                <li style={{marginLeft:"1%"}}><a href="#"onClick={()=>this.handleChangePage(4)}>4</a></li>
                <li style={{marginLeft:"1%"}}><a href="#"onClick={()=>this.handleChangePage(5)}>5</a></li>
                <li style={{marginLeft:"2%"}}><a href="#"  onClick={()=>this.handleChangePage(this.state.page+1)}>Next</a></li>
            </ul> 
        </div>
        
    )
}
}