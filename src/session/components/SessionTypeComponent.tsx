import React, { Component } from 'react'
import SessionType from 'session/SessionType';

interface Props{
    callback:(ind:number)=>any
}
export default class SessionTypeComponent extends Component<Props, any> {
    render() {
        return (
            <>
                <div className="container">
                    <h5>
                        Booking Types
                        </h5>
                    {/* <hr /> */}
                    <div className="row">
                        {
                            SessionType.map((val, ind, SessionType) => {
                                return (
                                    <div className="col-md-2" key={ind}>
                                        <div className="card card-profile card-plain">
                                            <div className="card-header card-avatar" style={{
                                                cursor: "pointer"
                                            }} onClick={()=>{
                                                this.props.callback(ind);
                                            }}>
                                                <img src="assets/img/new_logo.png" width="100%" className="img" />
                                            </div>
                                            <div className="card-body">
                                                {val.name}
                                            </div>
                                            <div className="card-footer">
                                                {val.description}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </>
        )
    }
}
