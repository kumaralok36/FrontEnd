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
import OnBoardFooter from './components/OnBoardFooter';
import OnBoardNavBar from './components/OnBoardNavBar';
import mHistory from 'mHistory';

export default class ProviderRegisterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: undefined,
        page: -1,
        lastQuestion:false
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
                    this.formOutputs.push(undefined);
                this.setState({
                    page: 0
                })
                console.log("Total Questions : ", this.questions.length, (11 + 1) % 12)
            }, (err) => {
                console.log(err)
                this.setLoaderState(false);
            });

    }

    handleAdd = (data1) => {
        if (data1 === undefined || data1 === [])
            //alert("Cannot be empty");
            Utility.showNotification("danger", "Field cannot be empty.")
        else {
            var mpage = this.state.page;
            this.formOutputs[mpage] = data1;
            this.updateIsLastInput();
            let nextPage = this.lookForNextEditablePage(this.state.page);
            if (nextPage != undefined) {
                this.setState({
                    page: nextPage,
                }, () => {

                })
            } else {
                this.saveAllAndRedirect();
            }
        }
    }

    saveAllAndRedirect = () => {
        mHistory.push("/login");
    }

    handlePrevPage = (i) => {
        // if (i > 0)
        //     this.setState({ page: i - 1 });
    }
    handleChangePage = (i) => {
        if (i >= 0 && i < this.questions.length)
            this.setState({ page: i });
    }


    lookForNextEditablePage = (index: number) => {
        let n = this.questions.length;
        let i = (index + 1) % n;
        while (!(this.formOutputs[i] === undefined || this.formOutputs[i] === 10E15)) {
            if (i == index)
                break;
            i = (i + 1) % n;
        }
        console.log("Next Page : ", (i == index) ? undefined : i);
        return (i == index) ? undefined : i;
    }

    updateIsLastInput = ()=>{
        let n = this.questions.length;
        let i = 0;
        let c = 0;
        while (i<n) {
            if(this.formOutputs[i] === undefined || this.formOutputs[i] === 10E15){
                c++;
            }
            i = i + 1;
        }
        let b = (c <= 1) ? true : false;
        this.setState({
            lastQuestion:b
        })
    }

    handleSkipButton = () => {
        if (this.questions[this.state.page].canSkip) {
            this.formOutputs[this.state.page] = 10E15
            let nextPage = this.lookForNextEditablePage(this.state.page);
            if (nextPage != undefined) {
                this.handleChangePage(nextPage);
            }
        } else
            //alert("This page can't be skipped.");
            Utility.showNotification("danger", "This page can't be skipped.");
    }

    myCallback: (skip: boolean) => any;

    callFromFooter = (skip: boolean) => {
        this.myCallback(skip)
    }

    callBackNav = (callback: (skip: boolean) => any) => {
        this.myCallback = callback;
    }

    getMainRenderComponent = () => {
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
        return <>
            <div className="container col-sm-7">
                <div className="card">
                    <div className="card-body">
                        {this.getMainRenderComponent()}
                    </div>

                    <div className="card-footer">
                        <Progress completed={9 * (this.state.page)} />
                    </div>
                </div>
            </div>
        </>
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



                {this.state.page >= 2 ?
                    <div className="wrapper ">
                        {/* style={{ background: "#f1f1f1" }} */}
                        <OnBoardSideBar formOutputs={this.formOutputs} questions={this.questions} handleChangePage={this.handleChangePage} page={this.state.page}/>
                        <div className="main-panel">
                            <OnBoardNavBar page={this.state.page} />
                            <div className="content">
                                <div className="container-fluid">
                                    {this.getMainRenderCard()}
                                </div>
                            </div>
                            <OnBoardFooter handleSkipButton={this.handleSkipButton} myCallback={this.callFromFooter} page={this.state.page} questions={this.questions} isLastInput={this.state.lastQuestion}/>
                        </div>
                    </div>
                    :
                    <>
                        <OnBoardNavBar page={this.state.page} />
                        <div className="wrapper"><br /> <br /><br />{this.getMainRenderCard()}</div>
                        <OnBoardFooter handleSkipButton={this.handleSkipButton} myCallback={this.callFromFooter} page={this.state.page} questions={this.questions} isLastInput={this.state.lastQuestion}/>
                    </>
                }
            </>


        )
    }
}