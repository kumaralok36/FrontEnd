import React, { Component } from 'react'
import LoaderContext from 'utility/LoaderContext';
import HttpCall from 'utility/HttpCall';
import Utility from 'utility/Utility';

export default class UserDashboard extends Component {
    state = {
        pendingReviews: [1],
        currentBooking: [2, 4],
        pendingPayments: [1]
    }
    setLoaderState: any;
    componentDidMount(){
        console.log("Mounting");
        this.setLoaderState(true);
        HttpCall.callUrl("https://www.google.com", "GET", undefined, (data)=>{
            this.setLoaderState(false);
        }, (err)=>{
            this.setLoaderState(false);
        })
    }
    componentWillUnmount() {
        console.log("Un Mounting");
    }
    render() {
        return (
            <>
                <LoaderContext.Consumer>
                    {
                        (value) => {
                            this.setLoaderState = value;
                            return (<></>);
                        }
                    }
                </LoaderContext.Consumer>
                {this.state.pendingReviews.length > 0 && <div className="container" >
                    <div className="header">
                        Pending Reviews
                </div>
                    <hr />

                    <div className="row">
                        {this.state.pendingReviews.map((ele) => {
                            return (
                                <div className="col-sm-4">
                                    <div className="card" key={ele}>
                                        <div className="card-header card-header-warning">
                                            Something Here
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
                        })}
                    </div>
                    <br />
                </div>}

                {this.state.currentBooking.length > 0 && <div className="container" >
                    <div className="header">
                        Current Bookings
                </div>
                    <hr />

                    <div className="row">
                        {this.state.currentBooking.map((ele) => {
                            return (
                                <div className="col-sm-4">
                                    <div className="card" key={ele}>
                                        <div className="card-header card-header-warning">
                                            Something Here
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
                        })}
                    </div>
                    <br />
                </div>}

                {this.state.pendingPayments.length > 0 && <div className="container" >
                    <div className="header">
                        Current Bookings
                </div>
                    <hr />

                    <div className="row">
                        {this.state.pendingPayments.map((ele) => {
                            return (
                                <div className="col-sm-4">
                                    <div className="card" key={ele}>
                                        <div className="card-header card-header-warning">
                                            Something Here
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
                        })}
                    </div>
                </div>}

            </>
        )
    }
}
