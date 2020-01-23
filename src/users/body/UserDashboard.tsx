import React, { Component } from 'react'
import LoaderContext from 'utility/LoaderContext';
import HttpCall from 'utility/HttpCall';
import Utility from 'utility/Utility';
import BackendUrls from 'utility/BackendUrls';
import SessionCard from './cards/SessionCard';
import AddressModal from './modals/AddressModal';
import ModalContext from 'utility/ModalContext';


export default class UserDashboard extends Component {

    state = {
        pendingReviews: [],
        currentBooking: [],
        pendingPayments: [],
    }
    setLoaderState: any;
    componentDidMount(){
        // console.log("Mounting");
        this.setLoaderState(true);
        HttpCall.callUrl(BackendUrls.URLS.User.Sessions.Get.url, "GET", undefined, data=>{
            this.setLoaderState(false);       
        }, error=>{
            this.setLoaderState(false);

        })
    }
    componentWillUnmount() {
        console.log("Un Mounting");
    }
    showModal:any;
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
                <ModalContext.Consumer>
                    {
                        value=>{
                            this.showModal=value;
                            return <></>
                        }
                    }
                </ModalContext.Consumer>
                {this.state.pendingReviews.length > 0 && <div className="container" >
                    <div className="header">
                        Pending Bookings
                </div>
                    <hr />
                    <div className="row">
                        {this.state.pendingReviews.map((ele) => {
                            return (
                                <SessionCard session={ele} sessionType={0} key={ele.sessionId}/>
                            )
                        })}
                    </div>
                    <br />
                </div>}

                {this.state.currentBooking.length > 0 && <div className="container" >
                    <div className="header">
                        Present Bookings
                </div>
                    <hr />

                    <div className="row">
                        {this.state.currentBooking.map((ele) => {
                            return (
                                <SessionCard session={ele} sessionType={1} key={ele.sessionId}/>
                            )
                        })}
                    </div>
                    <br />
                </div>}

                {this.state.pendingPayments.length > 0 && <div className="container" >
                    <div className="header">
                        Past Bookings
                </div>
                    <hr />

                    <div className="row">
                        {this.state.pendingPayments.map((ele) => {
                            return (
                                <SessionCard session={ele} sessionType={2} key={ele.sessionId}/>
                            )
                        })}
                    </div>
                </div>}

            </>
        )
    }
}
