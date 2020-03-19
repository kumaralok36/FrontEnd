import React from 'react';
import InputText from './components/inputs/InputText';
import { ProviderRegistrationQuestions } from 'utility/provider-onboard/ProviderRegistrationQuestions';
import { ProviderQuestionTypes } from 'utility/provider-onboard/ProviderQuestionTypes';
import InputCheckbox from './components/inputs/InputCheckbox';
import InputGoogleAddress from './components/inputs/InputGoogleAddress';
import InputEmail from './components/inputs/InputEmail';
import InputTextList from './components/inputs/InputTextList';
import InputTextArea from './components/inputs/InputTextArea';
import InputFile from './components/inputs/InputFile';
import InputFileList from './components/inputs/InputFileList';
import InputInformation from './components/inputs/InputInformation';
import Progress from 'react-progressbar'
import InputRadio from './components/inputs/InputRadio';
import { timingSafeEqual } from 'crypto';
import Utility from 'utility/Utility';
import InputPhone from './components/inputs/InputPhone';
import LoaderContext from 'utility/LoaderContext';
import HttpCall from 'utility/HttpCall';
import BackendUrls from 'utility/BackendUrls';
import ProviderCalls from 'utility/subCalls/ProviderCalls';
import OnBoardSideBar from './components/OnBoardSideBar';

export default class ProviderRegisterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: "",
        page: -1,
    }
    formOutputs = [];
    questions = [];

    setLoaderState: (b: boolean) => any;

    componentDidMount() {
        this.setLoaderState(true);
        HttpCall.callUrl(ProviderCalls.OnBoard.Get.url
            , "GET", undefined, (data) => {
                this.setLoaderState(false);
                this.questions = data.data;
                for (var i = 0; i < this.questions.length; i++)
                    this.formOutputs.push("");
                this.setState({
                    page: 0
                })
            }, (err) => {
                console.log(err)
                this.setLoaderState(false);
            });

    }

    handleAdd = (data1) => {
        if (data1 === "" || data1 === [])
            //alert("Cannot be empty");
            Utility.showNotification("danger", "Field cannot be empty.")
        else {
            var mpage = this.state.page;
            this.setState({
                page: this.state.page !== 11 ? this.state.page + 1 : this.state.page,
                data: data1
            }, () => {
                this.formOutputs[mpage] = data1;
                this.setState({ data: this.state.data })
                console.log(this.formOutputs);
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


    handleSkipButton = () => {
        if (this.questions[this.state.page].canSkip)
            this.handleChangePage(this.state.page + 1);
        else
            //alert("This page can't be skipped.");
            Utility.showNotification("danger", "This page can't be skipped.");
    }

    myCallback: (skip: boolean) => any;

    callBackNav = (callback: (skip: boolean) => any) => {
        this.myCallback = callback;
    }

    getComponent = () => {
        if (this.state.page >= this.questions.length || this.state.page < 0) {
            return <></>
        }

        var question = this.questions[this.state.page];

        if (question.inputType === ProviderQuestionTypes.EmailField)
            return <InputEmail handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.formOutputs} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.Information)
            return <InputInformation handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label={question.heading} page={this.state.page} information={question.value} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.PhoneField)
            return <InputPhone handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.formOutputs} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.TextField)
            return <InputText handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.formOutputs} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.TextList)
            return <InputTextList handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.formOutputs} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.MapAddress)
            return <InputGoogleAddress handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.formOutputs} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.RadioButton)
            return <InputRadio values={question.values} handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.formOutputs} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.File)
            return <InputFile handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label={question.heading} page={this.state.page} arr={this.formOutputs} callbackNav={this.callBackNav} />

        else if (question.inputType === ProviderQuestionTypes.FileList)
            return <InputFileList handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label={question.heading} page={this.state.page} arr={this.formOutputs} callbackNav={this.callBackNav} />
        else if (question.inputType === ProviderQuestionTypes.CheckBox)
            return <InputCheckbox values={question.values} handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} type="checkbox" label={question.heading} page={this.state.page} arr={this.formOutputs} callbackNav={this.callBackNav} />
    }

    getMainRenderCard = () => {
        return <div className="container col-sm-7">
            <div className="card">
                <div className="card-body">
                    {this.getComponent()}
                </div>

                <div className="card-footer">
                    <Progress completed={9 * (this.state.page)} />
                </div>
            </div>
        </div>
    }
    render() {
        console.log("percent comp" + 9 * (this.state.page));
        return (
            <>

                <LoaderContext.Consumer>
                    {
                        (loader) => {
                            this.setLoaderState = loader;
                            return <></>
                        }
                    }
                </LoaderContext.Consumer>
                <nav className="navbar navbar-light navbar-expand-lg navbar-absolute fixed-top">
                    <div className="container">
                        <span className="navbar-text">
                            Therapy on Demand
    </span>
                        {this.state.page >= 2 &&
                            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="navbar-toggler-icon icon-bar"></span>
                                <span className="navbar-toggler-icon icon-bar"></span>
                                <span className="navbar-toggler-icon icon-bar"></span>
                            </button>
                        }
                    </div>
                </nav>

                {this.state.page >= 2 ?
                    <div className="wrapper ">
                        {/* style={{ background: "#f1f1f1" }} */}
                        <OnBoardSideBar formOutputs={this.formOutputs} questions={this.questions} handleChangePage={this.handleChangePage} />
                        <div className="main-panel">
                            <div className="content">
                                <div className="container-fluid">
                                    {this.getMainRenderCard()}
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="wrapper"><br /> <br /><br />{this.getMainRenderCard()}</div>
                }


                <div style={{
                    position: "fixed",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "white",
                    padding: "15px"
                }}>
                    <div className="container">
                        <button className="btn btn-info pull-right" onClick={() => {
                            this.myCallback(false);
                        }}>Submit</button>
                        {(this.state.page >= 0 && this.questions[this.state.page]["canSkip"]) && <button className="btn btn-btn-default pull-right" onClick={this.handleSkipButton}>Skip</button>}
                    </div>
                </div>

            </>


        )
    }
}