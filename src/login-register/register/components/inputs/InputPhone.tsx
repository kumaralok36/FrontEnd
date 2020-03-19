import React from 'react';
import Utility from 'utility/Utility';
interface props {
    handleAdd, page, label, arr, handlePrevPage,
    callbackNav: (callback: (skip: boolean) => any) => any
}
export default class InputPhone extends React.Component<props, any>{
    input:any;
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.arr[this.props.page]
        }
    }

    componentDidMount() {
        this.props.callbackNav(this.callback);
        this.input.focus();
    }

    // state={
    //     data:this.props.arr[this.props.page]===undefined?undefined:this.props.arr[this.props.page]
    // }

    callback = (skip: boolean) => {
        if (skip) {
            //

        } else {
            this.handleClick();
        }
    }


    handleChange = (e) => {
        this.setState({ data: e.target.value });
    }

    handleClick = () => {
        var datan = this.state.data;
        var regex = /[0-9]{10}$/;
        this.setState({}, () => {
            if (!regex.test(datan))
                Utility.showNotification("danger", "Mobile number should be of 10 digits.");
            else
                this.props.handleAdd(datan);
        })
    }
    render() {
        return (
            <div className="card-body">
                <form onSubmit={this.handleClick} >
                    <div className="form-group">
                        <label style={{ color: "black" }}><b>{this.props.label}</b></label><br /><br />
                        <input ref={(input)=>{this.input=input}}
                        type="tel" className="form-control" placeholder="Your answer" value={this.state.data} onChange={(e) => this.handleChange(e)} /><br /><br />
                    </div>
                </form>
            </div>

        )
    }
}