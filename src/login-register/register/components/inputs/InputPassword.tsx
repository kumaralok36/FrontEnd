import React from 'react';
import Utility from 'utility/Utility';
interface props {
    handleAdd, page, label, arr, handlePrevPage,
    callbackNav: (callback: (skip: boolean) => any) => any
}
export default class InputPassword extends React.Component<props, any>{
    input:any;
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirm: ""
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


    handleChange = (e, ind) => {
        this.setState({ [ind==0?"password":"confirm"]: e.target.value });
    }

    handleClick = (event=undefined) => {
        if(event) event.preventDefault();
        var p1 = this.state.password;
        var confirm = this.state.confirm;
        if(!p1 || p1.length==0){
            Utility.showNotification("danger", "Password cant be empty!");
            return;
        }

        if(p1==confirm){
            this.setState({}, () => {
                this.props.handleAdd(p1);
            })
        }else{
            Utility.showNotification("danger", "Passwords dint match");
        }
    }
    render() {
        return (
            <div className="card-body">
                <form onSubmit={this.handleClick}>
                    <div className="form-group">
                        <label style={{ color: "black" }}><b>{this.props.label}</b></label><br /><br />
                        <input ref={(input)=>{this.input=input}}
                        type="password" className="form-control" placeholder="Password" value={this.state.data} onChange={(e) => this.handleChange(e, 0)} /><br /><br />
                        <input
                        type="password" className="form-control" placeholder="Confirm Password" value={this.state.data} onChange={(e) => this.handleChange(e, 1)} /><br /><br />
                    </div>
                </form>
            </div>

        )
    }
}