import React from 'react';
import InputText from '../InputText';
import { ProviderRegistrationQuestions } from 'utility/provider-onboard/ProviderRegistrationQuestions';
import { ProviderQuestionTypes } from 'utility/provider-onboard/ProviderQuestionTypes';
import InputCheckbox from '../InputCheckbox';
import InputGoogleAddress from '../InputGoogleAddress';
import InputEmail from '../InputEmail';
import InputTextList from '../InputTextList';
import InputTextArea from '../InputTextArea';
import InputFile from '../InputFile';
import InputFileList from '../InputFileList';
import InputInformation from '../InputInformation';
import Progress from 'react-progressbar'
import InputRadio from '../InputRadio';
import { timingSafeEqual } from 'crypto';

export default class ProviderRegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.arrQuestion = ProviderRegistrationQuestions;
    }

    state = {
        data: "",
        page: 0,
    }
    arr = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
    arrQuestion = [];
    handleAdd = (data1) => {
        var mpage = this.state.page;
        this.setState({
            page: this.state.page !== 11 ? this.state.page + 1 : this.state.page,
            data: data1
        }, () => {
            this.arr[mpage] = data1;
            console.log(this.arr);
        })
        this.setState({data:this.state.data})
    }
    handlePrevPage = (i) => {
        if (i > 0)
            this.setState({ page: i - 1 });
    }
    handleChangePage = (i) => {
        if (i >= 0 && i < 13)
            this.setState({ page: i });
    }

    getSidebarList = (arr) => {
        var arrQuest = this.arrQuestion;
        return (
            <div>
                {this.arrQuestion.map((value, index) => (
                    <li className={arr[index]==""?"btn btn-info":"btn btn-success"} onClick={() => this.handleChangePage(index)} style={{ marginTop: "2%", color:"black", width: "100%" }}><b>{value.formName}</b></li>
                ))}
            </div>
        )
    }

    myCallback:(skip:boolean)=>any;

    callBackNav= (callback:(skip:boolean)=>any) =>{
        this.myCallback=callback;
    }

    getComponent = () => {

        var question = this.arrQuestion[this.state.page];

        if (question.inputType === ProviderQuestionTypes.EmailField)
            return <InputEmail handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} callbackNav={this.callBackNav}/>

        else if (question.inputType === ProviderQuestionTypes.Information)
            return <InputInformation handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label={question.heading} page={this.state.page} information={question.value} />

        else if (question.inputType === ProviderQuestionTypes.TextField)
            return <InputText handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} />

        else if (question.inputType === ProviderQuestionTypes.TextList)
            return <InputTextList handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} />

        else if (question.inputType === ProviderQuestionTypes.MapAddress)
            return <InputGoogleAddress handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} />

        else if (question.inputType === ProviderQuestionTypes.RadioButton)
            return <InputRadio values={question.values} handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} />

        else if (question.inputType === ProviderQuestionTypes.File)
            return <InputFile handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label={question.heading} page={this.state.page} arr={this.arr} />

        else if (question.inputType === ProviderQuestionTypes.FileList)
            return <InputFileList handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label={question.heading} page={this.state.page} arr={this.arr} />
        else if (question.inputType === ProviderQuestionTypes.CheckBox)
            return <InputCheckbox values={question.values} handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} type="checkbox" label={question.heading} page={this.state.page} arr={this.arr} />



        //   if(this.state.page===0)
        //   return <InputEmail handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label="Enter your email *" page={this.state.page} arr={this.arr}/>
        //   else if(this.state.page===1)
        //   return <InputText handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label="Full name and title *" page={this.state.page} arr={this.arr}/>
        //   else if(this.state.page===2)
        //   return <InputText handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label="Phone number *" page={this.state.page} arr={this.arr}/>
        //   else if(this.state.page===3)
        //   return <InputTextList handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage}  label="Language(s) spoken / skill level *" page={this.state.page} arr={this.arr}/>
        //   else if(this.state.page===4)
        //   return <InputTextArea handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label="Please list your license and/or certification type(s) by location(s) for telehealth & geographic service areas if you plan to opt-in to provide on-site services." page={this.state.page} arr={this.arr}/>
        //   else if(this.state.page===5)
        //   return <InputTextArea handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label="Please list your active and valid healthcare license(s) and/or coaching certificates. Include the contact information for primary-source validation of each document.*" page={this.state.page} arr={this.arr}/>
        //   else if(this.state.page===6)
        //   return <InputCheckbox handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} type="checkbox" label="Accept terms and conditions*" page={this.state.page} arr={this.arr}/>
        //   else if(this.state.page===7)
        //   return <InputGoogleAddress handleAdd={this.handleAdd} label="Enter your address" page={this.state.page} arr={this.arr}/>
        //   else if(this.state.page===8)
        //   return <InputFile handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label="Enter your address" page={this.state.page} arr={this.arr} />
        //   else if(this.state.page===9)
        //   return <InputFileList handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label="Enter your address" page={this.state.page} arr={this.arr} />
        //   else if(this.state.page===10)
        //   return <InputInformation handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label="Enter your address" page={this.state.page} information="Thanks for registering."  />
    }

    render() {
        return (
            <>
                {/* <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <a className="navbar-brand" href="#pablo">Dashboard</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                    </div>
                </nav> */}

                <nav className="navbar navbar-light navbar-expand-lg navbar-absolute fixed-top">
                    <div className="container">
                        <span className="navbar-text">
                            Therapy on Demand
    </span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                    </div>
                </nav>

                <div style={{ background: "#f1f1f1" }} className="sidebar" data-color="purple" data-background-color="white" data-image="assets/img/sidebar-3.jpg">
                    <div className="logo">
                        <a href="/" className="simple-text logo-normal">
                            Therapy on Demand
                        </a>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li style={{
                                cursor: "pointer"
                            }} className={`nav-item ${(true) ? "active" : ""}`}>
                                <a className="nav-link">
                                    <i className="material-icons">dashboard</i>
                                    <p>Hello</p>
                                </a>
                            </li>
                        </ul>
                        <ul className="nav nav-pills nav-stacked ">
                            <div className="row-contents" style={{ padding: "6%" }}>
                                {this.getSidebarList(this.arr)}
                            </div>
                        </ul><br></br>
                    </div>
                </div>


                <div className="container col-sm-7" style={{ background: "white", padding: "1%", marginTop: "2%" }}>
                    <div className="card" style={{ background: "#33a8ff", color: "white" }}>
                        <div className="card-header">
                            <h3><b>Futura Health Registration</b></h3>
                            <div>Sign up to receive more information about becoming a provider in the Futura.Health ecosysteming, including Therapy on Demand</div>
                            <div style={{ color: "red" }}>required*</div>
                        </div>
                    </div>
                    <div className="card">
                        {this.getComponent()}
                    </div>
                    <div className="card-footer">
                        <div>
                            <Progress completed={9 * (this.state.page)} />
                        </div>

                    </div>
                </div>


                <div style={{
                    position: "fixed",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "white",
                    padding: "15px"
                }}>
                    <div className="container">
                        <button className="btn btn-info pull-right" onClick={()=>{
                            this.myCallback(false);
                        }}>Next</button>
                        <button className="btn btn-btn-default pull-right" onClick={()=>{
                            this.myCallback(true);
                        }}>Skip</button>
                    </div>
                </div>

            </>


        )
    }
}