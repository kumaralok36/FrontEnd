import React, { Component } from 'react'

export default class UserDashboard extends Component {
    componentWillMount() {
        console.log("Mounting");

    }
    componentWillUnmount() {
        console.log("Un Mounting");
    }
    render() {
        return (
            <div>
                User Dashboard
            </div>
        )
    }
}
