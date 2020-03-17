import React from 'react';
import { timingSafeEqual } from 'crypto';
import Progress from 'react-progressbar';

interface props {
    handleAdd, page, label, type, arr, handlePrevPage, values,
    callbackNav: (callback: (skip: boolean) => any) => any
}
export default class InputCheckbox extends React.Component<props, any>{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.callbackNav(this.callback);
    }

    arr = this.props.arr
    state = {
        data: this.props.arr[this.props.page] === "" ? [{ formvalue: 0, status: false }, { formvalue: 1, status: false }, { formvalue: 2, status: false }, { formvalue: 3, status: false }, { formvalue: 4, status: false }] : this.props.arr[this.props.page],

    }
    getCheckBoxes = () => {
        return (
            <div>
                {this.props.values.map((value, index) => (
                    <tr>
                        <td style={{ textAlign: "center", margin: "2%" }}><input style={{ marginRight: "1%" }} className="checkbox" type={this.props.type} checked={this.checkStatus(value.formValue)} onClick={() => this.handleChange(value.formValue)} /></td>
                        <td style={{ textAlign: "left" }}><label style={{ color: "black", marginLeft: "1%" }}><b>{value.name}</b></label></td><br /><br />
                    </tr>
                ))}
            </div>
        )
    }

    callback = (skip: boolean) => {
        if (skip) {
            //

        } else {
            this.handleClick();
        }
    }

    checkStatus = (formvalue) => {
        var i = this.getIndex(formvalue);
        return this.state.data[i].status
    }
    getIndex = (formvalue) => {
        for (var i = 0; i < this.props.values.length; i++) {
            if (this.props.values[i].formValue === formvalue)
                return i;
        }
    }

    handleChange = (formvalue) => {
        var i = this.getIndex(formvalue);
        var datan = this.state.data;
        datan[i].status = !(datan[i].status);
        this.setState({ data: datan }, () => {
            console.log(this.state.data);
        });
    }

    handleClick = () => {
        var count = 0;
        for (var i = 0; i < this.state.data.length; i++)
            if (this.state.data[i].status === true)
                count++;
        console.log(count);
        if (count > 0)
            this.props.handleAdd(this.state.data);
        else
            this.props.handleAdd("");
    }

    render() {
        return (
            <div>
                <div className="card-body">
                    <form onSubmit={this.handleClick}>
                        <div className="form-group">
                            <label style={{ color: "black" }}><b>{this.props.label}</b></label>
                            <div className="custom-control custom-checkbox">
                                <table>
                                    {this.getCheckBoxes()}
                                </table>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}