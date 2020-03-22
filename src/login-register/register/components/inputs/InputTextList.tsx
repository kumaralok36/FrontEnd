import React from 'react';
import Utility from 'utility/Utility';

interface props {
    label, arr, handleAdd, page, handlePrevPage,
    callbackNav: (callback: (skip: boolean) => any) => any
}
export default class InputTextList extends React.Component<props, any>{
    input: any;
    constructor(props) {
        super(props);

        // this.removeLanguage=this.removeLanguage.bind(this);
    }

    componentDidMount() {
        this.props.callbackNav(this.callback);
        this.input.focus();
    }

    state = {
        data: [],
        list: this.props.arr[this.props.page] === undefined ? [] : this.props.arr[this.props.page]
    }
    listnum: 0;
    getList = () => {
        return (
            <div>
                {this.state.list.map(list => (
                    <span style={{ margin: "2%" }}>{list}
                        <input type="button" style={{ margin: "1%", height: "26px", border: "1px solid white", borderRadius: "4px" }} value="x" onClick={() => { this.setState({ list: this.state.list.filter(li => { return (li !== list) }) }) }} />
                    </span>
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

    handleChange = (e) => {
        this.setState({
            data: e.target.value
        });
    }
    // removeLanguage=(li)=>{
    //     this.list=this.list.filter(list=>{
    //         return(list!==li);
    //     })
    // }

    addToList = (data) => {
        if (data != undefined && data!="") {
            this.state.list.push(data);
            this.setState({
                data: ""
            })
        }
    }

    handleClick = (event=undefined) => {
        if(event) event.preventDefault();
        var listn = this.state.list;
        if (listn.length > 0) {
            this.setState({
                data: ""
            }, () => {
                this.props.handleAdd(listn);
            })
        }
        else
            Utility.showNotification("danger", "List cannot be empty");
    }
    render() {
        //console.log(this.state.list)
        return (
            <div className="card-body">
                <form style={{ marginTop: "4%" }} onSubmit={(event) => {
                    event.preventDefault();
                    this.addToList(this.state.data)
                }}>
                    <div className="form-group">
                        <label style={{ color: "black" }} ><b>{this.props.label}</b></label><br /><br />
                        {this.getList()}
                        <input ref={(input) => { this.input = input }}
                            type="text" className="form-control" value={this.state.data} onChange={this.handleChange} /><br />
                        <input type="button" className="btn btn-info" value="Add" onClick={() => this.addToList(this.state.data)} />
                    </div>
                </form>
            </div>
        )
    }
}