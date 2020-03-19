import React, { Component } from 'react'
import FirstPageProviderRegister from './components/pages/FirstPageProviderRegister'
import SecondPageProviderRegister from './components/pages/SecondPageProviderRegister'
import ThirdPageProviderRegister from './components/pages/ThirdPageProviderRegister'

export default class ProviderRegisterForm extends Component {
    constructor(props){
        super(props);
   
    }
    state={
        page:1
    }
    componentDidMount(){
        
    }
    handleChangePage=(i)=>{
           this.setState({page:i});
    }
    
    getComponents=()=>
    {
        if(this.state.page===1)
        return(
            <FirstPageProviderRegister handleChangePage={this.handleChangePage}/>
        )
        else if(this.state.page===2)
        return(
            <SecondPageProviderRegister handleChangePage={this.handleChangePage}/>
        )
        else if(this.state.page===3)
        return(
            <ThirdPageProviderRegister/>
        )
    }
    render() {
        return (
            <div>{this.getComponents()}</div>
            
        )
    }
}
