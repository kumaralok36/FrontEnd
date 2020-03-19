import React from 'react';
import Utility from 'utility/Utility';
interface props {
    handleAdd, page, arr, label, handlePrevPage,
    callbackNav: (callback: (skip: boolean) => any) => any
}
export default class InputEmail extends React.Component<props, any>{

    input:any;
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.callbackNav(this.callback);
        this.input.focus();
    }

    state = {
        data: this.props.arr[this.props.page]
    }

    arr = this.props.arr;
    handleChange = (e) => {
        this.setState({
            data: e.target.value
        });
    }

    handleClick = () => {
        var datan = this.state.data;
        var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

        this.setState({
            data: this.state.data
        }, () => {
            if (!regex.test(datan))
                Utility.showNotification("danger", "Improper format of an email");
            else
                this.props.handleAdd(datan);
        })


    }

    callback = (skip: boolean) => {
        if (skip) {
            //

        } else {
            this.handleClick();
        }
    }

    render() {
        return (
            <div className="card-body">
                <form onSubmit={this.handleClick} >
                    <div className="form-group">
                        <label style={{ color: "black" }}><b>{this.props.label}</b></label><br /><br />
                        <input ref={(input)=>{this.input=input}}
                        type="text" className="form-control" value={this.arr[this.props.page] === undefined ? this.state.data : this.arr[this.props.page]} onChange={this.handleChange} /><br />
                    </div>
                </form>
            </div>
        )
    }
}