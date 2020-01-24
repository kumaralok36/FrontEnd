import React, { Component } from 'react'

interface Props {
    sessionType: number,
    callback: (id: string) => any
}
export default class ProviderSelectionComponent extends Component<Props, any> {
    state = {
        providers: ["1","2","3"]
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row mx-auto">
                        {this.state.providers.map((val, ind) => {
                            return (
                                <>
                                    <div className="col-md-4">
                                        <div className="card card-profile">
                                            <div className="card-header card-avatar">
                                                <a href="#pablo">
                                                    <img className="img" src="assets/img/new_logo.png"/>
                  </a>
                </div>
                                                <div className="card-body">
                                                    <h4 className="card-title">Alec Thompson</h4>
                                                    <h6 className="card-category text-muted">CEO / Co-Founder</h6>
                                                    <p className="card-description">
                                                        Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                                                </div>
                                                <div className="card-footer justify-content-center">
                                                    <a href="#pablo" className="btn btn-just-icon btn-linkedin btn-round"><i className="fa fa-linkedin"></i></a>
                                                    <a href="#pablo" className="btn btn-just-icon btn-twitter btn-round"><i className="fa fa-twitter"></i></a>
                                                    <a href="#pablo" className="btn btn-just-icon btn-dribbble btn-round"><i className="fa fa-dribbble"></i></a>
                                                </div>
                                                <div className="card-footer justify-content-center">
                                                    <button className="btn btn-round btn-info" onClick={()=>{
                                                        this.props.callback(val);
                                                    }}>Continue Booking</button>
                                                </div>
                                            </div>
                                        </div>
                                </>
                                    )
                                })}
                    </div>
                    <br/><br/><br/>
                </div>
            </>
                    )
                }
            }
