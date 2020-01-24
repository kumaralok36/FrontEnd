import React, { Component, FormEvent } from 'react'
import LoaderContext from 'utility/LoaderContext';
import Utility from 'utility/Utility';
import { Http2ServerRequest } from 'http2';
import HttpCall from 'utility/HttpCall';
import BackendUrls from 'utility/BackendUrls';

export default class ProviderRegisterForm extends Component {
    state = {
        registerForm: {
            firstName: "",
            lastName: "",
            gender: 2,
            qualifications: "",
            experience: "",
            resume: "",
            email: "",
            phone: "",
            password: "",
            education: "",
            lattitude: 0,
            longitude: 0
        },
        repassword: "",
        resumeUploaded: false
    };
    setLoaderState: any;
    resumeInput: any;

    constructor(props) {
        super(props)
        this.resumeInput = React.createRef();
    }


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
    onSubmit = (event:any) => {
        event.preventDefault();
        HttpCall.callUrl(BackendUrls.URLS.Provider.Register.url, BackendUrls.URLS.Provider.Register.type, {}, (data)=>{
            Utility.showNotification("success", "Woho");
        }, err=>{
            Utility.showNotification("danger", "Error");
        }, new FormData(event.target))
    }
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.loadPosition);
        } else {
            Utility.showNotification("danger", "Oops! Cant fetch the location");
        }
    }
    loadPosition = (position)=>{
        console.log(position.coords);
        this.setState({
            registerForm: {
                ...this.state.registerForm,
                lattitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        })
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
                <form className="form" onSubmit={(event) => { this.onSubmit(event) }}>
                    <div className="form-row">
                        <div className="form-group label-floating col">
                            <label className="control-label bmd-label-floating">First Name</label>
                            <input className="form-control" name="firstName" value={this.state.registerForm.firstName} onChange={(event) => { this.onFormChange(event) }} />
                        </div>
                        <div className="form-group label-floating col">
                            <label className="control-label bmd-label-floating">Last Name</label>
                            <input className="form-control" name="lastName" value={this.state.registerForm.lastName} onChange={(event) => { this.onFormChange(event) }} />
                        </div>
                    </div>
                    <div className="form-group label-floating">
                        <label className="control-label bmd-label-floating">Email</label>
                        <input className="form-control" type="email" name="email" value={this.state.registerForm.email} onChange={(event) => { this.onFormChange(event) }} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Gender</label>
                        <select name="gender" className="btn btn-sm btn-block" value={this.state.registerForm.gender} onChange={(event) => { this.onFormChange(event) }}>
                            <option className="btn btn-white" value={0}>Male</option>
                            <option className="btn btn-white" value={1}>Female</option>
                            <option className="btn btn-white" value={2}>Won't Disclose</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="control-label">Qualification</label>
                        <select name="qualifications" className="btn btn-sm btn-block" value={this.state.registerForm.qualifications} onChange={(event) => { this.onFormChange(event) }}>
                            <option className="btn btn-white" value="Graduate">Graduate</option>
                            <option className="btn btn-white" value="Post Graduate">Post Graduate</option>
                            <option className="btn btn-white" value="Others">Others</option>
                        </select>
                    </div>

                    <div className="form-group label-floating">
                        <label className="control-label bmd-label-floating">Experience</label>
                        <input className="form-control" type="text" name="experience" value={this.state.registerForm.experience} onChange={(event) => { this.onFormChange(event) }} />
                    </div>

                    <div className="form-group label-floating">
                        <label className="control-label bmd-label-floating">Phone Number</label>
                        <input className="form-control" type="tel" name="phone" value={this.state.registerForm.phone} onChange={(event) => { this.onFormChange(event) }} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">{this.state.resumeUploaded ? "Resume Uploaded" : "Upload Resume"}</label>
                        <input type="file" ref={this.resumeInput} name="resume" value={this.state.registerForm.resume} accept="*.jpg, *.pdf, *.png" hidden onChange={() => {
                            this.setState({ resumeUploaded: true })
                        }} />
                        <button type="button" className="btn btn-sm btn-block" onClick={() => { this.resumeInput.current.click() }}>{this.state.resumeUploaded ? "Re-Upload Resume" : "Upload Resume"}</button>
                    </div>

                    <div className="form-group label-floating">
                        <label className="control-label bmd-label-floating">Password</label>
                        <input className="form-control" type="password" name="password" value={this.state.registerForm.password} onChange={(event) => { this.onFormChange(event) }} />
                    </div>
                    <div className="form-group label-floating">
                        <label className="control-label bmd-label-floating">Retype Password</label>
                        <input className="form-control" type="password" value={this.state.repassword} onChange={(event) => { this.setState({ repassword: event.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="lattitude" value={this.state.registerForm.lattitude} hidden />
                        <input type="text" name="lattitude" value={this.state.registerForm.lattitude} hidden />
                        <button type="button" className="btn btn-sm btn-block" onClick={() => { this.getLocation() }}>Get Location</button>
                    </div>

                    <br />
                    <button className="btn btn-block btn-info" type="submit">Sign Up</button>
                </form>
            </>
        )
    }
}
