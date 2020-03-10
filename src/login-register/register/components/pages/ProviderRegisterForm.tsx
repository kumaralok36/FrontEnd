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
import Utility from 'utility/Utility';
import InputPhone from '../InputPhone';

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
        if(data1==="" || data1===[])
        //alert("Cannot be empty");
        Utility.showNotification("danger","Field cannot be empty.")
        else
        {var mpage = this.state.page;
        this.setState({
            page: this.state.page !== 11 ? this.state.page + 1 : this.state.page,
            data: data1
        }, () => {
            this.arr[mpage] = data1;
            this.setState({data:this.state.data})
            console.log(this.arr);
        })
    }
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
                    <li className={(arr[index]=="" || arr[index]==[] ||arr[index][0]===[])?"btn btn-info":"btn btn-success"} onClick={() => this.handleChangePage(index)} style={{ marginTop: "2%", color:"black", width: "100%" }}><b>{value.formName}</b></li>
                ))}
            </div>
        )
    }
    handleSkipButton=()=>{
       if(this.arrQuestion[this.state.page].canSkip)
        this.handleChangePage(this.state.page + 1);
       else
       //alert("This page can't be skipped.");
       Utility.showNotification("danger","This page can't be skipped.");
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
            return <InputInformation handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label={question.heading} page={this.state.page} information={question.value} callbackNav={this.callBackNav} />
        
        else if (question.inputType === ProviderQuestionTypes.PhoneField)
            return <InputPhone handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} callbackNav={this.callBackNav} />    

        else if (question.inputType === ProviderQuestionTypes.TextField)
            return <InputText handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.TextList)
            return <InputTextList handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.MapAddress)
            return <InputGoogleAddress handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.RadioButton)
            return <InputRadio values={question.values} handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.File)
            return <InputFile handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label={question.heading} page={this.state.page} arr={this.arr} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.FileList)
            return <InputFileList handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label={question.heading} page={this.state.page} arr={this.arr} callbackNav={this.callBackNav} />
        else if (question.inputType === ProviderQuestionTypes.CheckBox)
            return <InputCheckbox values={question.values} handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} type="checkbox" label={question.heading} page={this.state.page} arr={this.arr} callbackNav={this.callBackNav} />



        
    }

    render() {
        console.log("percent comp"+9 * (this.state.page));
        return (
            <>

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
                        }}>Submit</button>
                        <button className="btn btn-btn-default pull-right" onClick={this.handleSkipButton}>Skip</button>
                    </div>
                </div>

            </>


        )
    }
}