import React, { Component } from 'react'
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import Utility from 'utility/Utility';

interface Props {
    login: boolean
    callback?: (params: any) => any
}
export default class LoginRegisterRoute extends Component<Props, any> {
    state = {
        login: true,
        standAlone: true,
        callback: (params: any) => { }
    }
    constructor(props: Props) {
        super(props)

        this.state = {
            login: props.login,
            standAlone: (!props.callback),
            callback: props.callback ? props.callback : this.onActionComplete
        }
    }
    onActionComplete = (params: any) => {

    }
    componentWillMount() {
        Utility.redirectToCorrectUrl();
    }

    render() {
        return (
            <>
                {this.state.standAlone ? (<>
                    <div style={{
                        backgroundImage:"url('assets/img/cover.jpg')",
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover"
                    }}>
                        {/* Decoration Would be Done here.... */}
                        {this.state.login ? <LoginPage /> : <RegisterPage />}
                    </div>
                </>) :
                    (this.state.login ? <LoginPage /> : <RegisterPage />)}

            </>
        )
    }
}
