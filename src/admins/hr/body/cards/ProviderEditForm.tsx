import React, { Component } from 'react'

interface Props{
    profile:{
        fisrtName:string
		lastName:string
        phone:string
        email:string
        gender:number
		image:string
    },
    callback:()=>any
}

export default class ProviderEditForm extends Component<Props, any> {

    componentDidMount(){

    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        User Profile
                    </div>
                    <div className="card-body">
                        <input className="input" name="firstName"/>
                        <input className="input" name="lastName"/>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary pull-left"/>
                    </div>
                </div>
            </>
        )
    }
}
