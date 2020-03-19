import React, { Component } from 'react'
import HttpCall from 'utility/HttpCall';
import BackendUrls from 'utility/BackendUrls';
import Utility from 'utility/Utility';
import LoaderContext from 'utility/LoaderContext';

export default class UserRegistrationForm extends Component {
    state = {
        registerForm: {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            password: undefined,
            gender: 0,
            phone: undefined,
            debug: false
        }
    }
    setLoaderState: any
    componentDidMount() {

    }
    onFormChange = (event) => {
        this.setState({
            registerForm: {
                ...this.state.registerForm,
                [event.target.name]: event.target.value
            }
        })
    }
    onFormSubmit = (event) => {
        this.setLoaderState(true);
        HttpCall.callUrl(BackendUrls.formUrl(BackendUrls.URLS.User.Register.url), "POST", this.state.registerForm,
            (data) => {
                Utility.showNotification("success", "Successfully Registered!")
                this.setLoaderState(false);
            }, (error) => {
                Utility.showNotification("danger", "Something went wrong!!")
                this.setLoaderState(false);
            })
        event.preventDefault();
    }
    render() {
        return (
            <>
                <LoaderContext.Consumer>
                    {
                        value => {
                            this.setLoaderState = value;
                            return <></>
                        }
                    }
                </LoaderContext.Consumer>
                <form className="form-signin" onSubmit={(event) => { this.onFormSubmit(event) }}>
                    <div className="form-label-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="First Name"
                            name="firstName" value={this.state.registerForm.firstName} onChange={(event) => { this.onFormChange(event) }} required />
                    </div>
                    <div className="form-label-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name"
                            name="lastName" value={this.state.registerForm.lastName} onChange={(event) => { this.onFormChange(event) }} required />
                    </div>
                    <div className="form-label-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email"
                            name="email" value={this.state.registerForm.email} onChange={(event) => { this.onFormChange(event) }} required />
                    </div>
                    <div className="form-label-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"
                            name="password" value={this.state.registerForm.password} onChange={(event) => { this.onFormChange(event) }} required />
                    </div>
                    <div className="form-label-group">
                        <select className="btn btn-block" name="gender" value={this.state.registerForm.gender} onChange={(event) => { this.onFormChange(event) }}>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                            <option value={2}>Wont Disclose</option>
                        </select>
                    </div>

                    <div className="form-label-group">
                        <label>Phone Number</label>
                        <input type="tel" className="form-control" placeholder="Phone Number"
                            name="phone" value={this.state.registerForm.phone} onChange={(event) => { this.onFormChange(event) }} required />
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign Up</button>
                </form>
            </>
        )
    }
}
