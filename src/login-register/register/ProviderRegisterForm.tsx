import React, { Component } from 'react'
import FirstPageProviderRegister from './components/pages/FirstPageProviderRegister'
import SecondPageProviderRegister from './components/pages/SecondPageProviderRegister'
import ThirdPageProviderRegister from './components/pages/ThirdPageProviderRegister'

export default class ProviderRegisterForm extends Component {
    state={
        page:1
    }
    componentDidMount(){
        
    }
    render() {
        return (
            <>
                {this.state.page==1&&<FirstPageProviderRegister />}
                {this.state.page==2&&<SecondPageProviderRegister />}
                {this.state.page==3&&<ThirdPageProviderRegister />}
            </>
        )
    }
}
