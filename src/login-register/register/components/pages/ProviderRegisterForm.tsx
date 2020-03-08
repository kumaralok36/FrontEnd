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
        var mpage=this.state.page;
        this.setState({
            page: this.state.page !== 11 ? this.state.page + 1 : this.state.page,
            data: data1
        }, () => {
            this.arr[mpage] = data1;
            console.log(this.arr);
        })
    }
    handlePrevPage = (i) => {
        if (i > 0)
            this.setState({ page: i - 1 });
    }
    handleChangePage = (i) => {
        if (i >= 0 && i < 11)
            this.setState({ page: i });
    }

    getComponent = () => {

        var question = this.arrQuestion[this.state.page];

        if (question.inputType === ProviderQuestionTypes.EmailField)
            return <InputEmail handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} />

        else if (question.inputType === ProviderQuestionTypes.Information)
            return <InputInformation handlePrevPage={this.handlePrevPage} handleAdd={this.handleAdd} label={question.heading} page={this.state.page} information={question.value} />

        else if (question.inputType === ProviderQuestionTypes.TextField)
            return <InputText handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} />

        else if (question.inputType === ProviderQuestionTypes.TextList)
            return <InputTextList handleAdd={this.handleAdd} handlePrevPage={this.handlePrevPage} label={question.heading} page={this.state.page} arr={this.arr} />

        else if (question.inputType === ProviderQuestionTypes.MapAddress)
            return <InputGoogleAddress handleAdd={this.handleAdd} label={question.heading} page={this.state.page} arr={this.arr} />

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
            <div className="container col-sm-7" style={{ background: "white", padding: "1%", marginTop: "2%" }}>
                <div className="card" style={{ background: "blue", color: "white" }}>
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
                    <ul className="pagination">
                        <li className={this.state.page === 0 ? "disabled" : ""}><a href="#" onClick={() => this.handleChangePage(this.state.page - 1)}>Previous</a></li>
                        <li style={{ marginLeft: "2%" }}><a href="#" onClick={() => this.handleChangePage(1)}>1</a></li>
                        <li style={{ marginLeft: "1%" }}><a href="#" onClick={() => this.handleChangePage(2)}>2</a></li>
                        <li style={{ marginLeft: "1%" }}><a href="#" onClick={() => this.handleChangePage(3)}>3</a></li>
                        <li style={{ marginLeft: "1%" }}><a href="#" onClick={() => this.handleChangePage(4)}>4</a></li>
                        <li style={{ marginLeft: "1%" }}><a href="#" onClick={() => this.handleChangePage(5)}>5</a></li>
                        <li style={{ marginLeft: "2%" }}><a href="#" onClick={() => this.handleChangePage(this.state.page + 1)}>Next</a></li>
                    </ul>
                </div>
            </div>

        )
    }
}