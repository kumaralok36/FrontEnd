import React, { Component } from 'react'
export interface Props{
    session: {
        sessionId: string
        amount: number
        providerName: string
        massageType: number,
        massageLength: number,
        preferredGender: number,
        massageDate: number,
        pets: boolean,
        equipements: boolean,
        medicalInformation: string,
        sessionStatus: number
    }
    sessionType:number //0-Pendin 1-Present 2-Past
}
export default class SessionCard extends Component<Props, any> {

    constructor(props) {
        super(props)
    }

    generateOtp=()=>{

    }

    checkOut=()=>{
        
    }

    cancelBooking=()=>{
        
    }

    render() {
        return (
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-header card-header-warning">
                        {this.props.session.amount}
                    </div>
                    <div className="card-body">
                        The body is here....
                            </div>
                    <div className="card-footer">
                        Woohooo!!!
                            </div>
                </div>
            </div>
        )
    }
}
