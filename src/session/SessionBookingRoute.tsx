import React, { Component } from 'react'

export default class SessionBookingRoute extends Component {
    render() {
        return (
            <div>
                <div className="container">

                    <div className="row">
                        <div className="mx-auto">
                            <img src="logo512.png" width="100px" />
                        </div>

                    </div>
                    <div className="row">
                        <div className="mx-auto">
                            <h3>
                                Therapy on Demand
                        </h3>
                        </div>

                    </div>

                    {/* <hr /> */}
                </div>

                <br />
                <div className="container">
                    <h5>
                        Booking Types
                        </h5>
                    {/* <hr /> */}
                    <div className="row">
                        {
                            [1, 2, 3, 5, 6, 7, 8, 9, 10].map((val) => {
                                return (
                                    <div className="col-md-2" key={val}>
                                        <div className="card">
                                            <div className="card-header">
                                                <img src="logo512.png" width="100%" />
                                            </div>
                                            <div className="card-body">
                                                Body Massage
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
