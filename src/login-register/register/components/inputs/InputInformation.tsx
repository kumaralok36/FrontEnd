import React from 'react';

interface props {
    label, information, handleAdd, page, handlePrevPage,
    callbackNav: (callback: (skip: boolean) => any) => any
}
export default class InputInformation extends React.Component<props, any>{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.callbackNav(this.callback);
    }

    callback = (skip: boolean) => {
        if (skip) {
            //

        } else {
            this.handleClick();
        }
    }

    handleClick = (event=undefined) => {
        if(event) event.preventDefault();
        this.props.handleAdd("read");
    }
    render() {
        return (
            <div className="card-body">
                <form onSubmit={this.handleClick}>
                    <label style={{ color: "black" }}><b>{this.props.label}</b></label><br /><br />
                    <p>{this.props.information}</p>
                </form>
            </div>
        )
    }

}