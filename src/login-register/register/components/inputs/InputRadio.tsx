import React from 'react';
import Utility from 'utility/Utility';

interface props {
    values, handleAdd, handlePrevPage, page, arr, label,
    callbackNav: (callback: (skip: boolean) => any) => any
}
export default class InputRadio extends React.Component<props, any>{

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.arr[this.props.page] === undefined ? [false, false, false] : this.props.arr[this.props.page]
        }
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

    getButtons = () => {
        return (
            <div>
                {this.props.values.map((value, index) => (
                    <tr>
                        <td><input type="radio" checked={this.state.data[index]} onClick={() => { this.handleStatus(index) }} /></td>
                        <td><label style={{ marginLeft: "2%", color: "black" }}><b>{value.name}</b></label></td>
                    </tr>
                ))}
            </div>
        )
    }
    handleStatus = (index) => {
        var datan = this.state.data;
        datan[index] = !datan[index];
        this.setState({
            data: datan
        })
    }

    handleClick = (event=undefined) => {
        if(event) event.preventDefault();
        var count = 0;
        for (var i = 0; i < this.state.data.length; i++)
            if (this.state.data[i] === true)
                count++;
        console.log(count);
        if (count > 0)
            this.props.handleAdd(this.state.data);
        else
            this.props.handleAdd(undefined);



    }

    render() {
        return (
            <div className="card-body">
                <label style={{ color: "black" }}><b>{this.props.label}</b></label><br /><br />
                <div className="radio">
                    <form onSubmit={this.handleClick}>
                        <table>
                            {this.getButtons()}
                        </table>
                    </form>

                </div>
            </div>
        )
    }

}