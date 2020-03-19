import React from 'react'
import { isNumber } from 'util';

interface props {
    handleAdd, arr, label, page, handlePrevPage,
    callbackNav: (callback: (skip: boolean) => any) => any
}
export default class InputFileList extends React.Component<props, any>{
    constructor(props) {
        super(props);
        this.state = {
            data: "File Name",
            list: this.props.arr[this.props.page] === undefined || isNumber(this.props.arr[this.props.page])? [] : this.props.arr[this.props.page][1],
            files: this.props.arr[this.props.page] === undefined || isNumber(this.props.arr[this.props.page])? [] : this.props.arr[this.props.page][0],
        }
        console.log(this.state);
    }

    componentDidMount() {
        this.props.callbackNav(this.callback);
    }


    handleChange = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            console.log(e.target.result);
            this.state.list.push(files[0]);
            this.state.files.push(e.target.result)
            this.setState({ data: undefined });
        }
    }

    callback = (skip: boolean) => {
        if (skip) {
            //

        } else {
            this.handleClick();
        }
    }

    getList = () => {
        return (
            <div>
                {this.state.list.map((list, index) => (
                    <div style={{}}>{list.name}
                        <input type="button" style={{ margin: "1%", height: "26px", border: "1px solid white" }} value="x" onClick={() => {
                            this.setState({ list: this.state.list.filter(li => { return (li !== list) }) });
                            var filesnew = this.state.files;
                            filesnew.splice(index, 1);
                            this.setState({ files: filesnew })
                        }} />
                    </div>
                ))}
            </div>
        )
    }
    getBrowseAgainLine = () => {
        if (this.state.files.length > 0)
            return <p style={{ color: "red" }}>Browse again to add different file.</p>

    }

    handleClick = (event=undefined) => {
        if(event) event.preventDefault();
        var filesn = this.state.files;
        var listn = this.state.list;
        var listfinal = [];
        listfinal.push(filesn);
        listfinal.push(listn);
        this.setState({
            data: undefined
        }, () => {
            if (listn.length > 0)
                this.props.handleAdd(listfinal);
            else
                this.props.handleAdd(undefined);
        })
    }
    render() {
        return (

            <div className="card-body">
                <form onSubmit={this.handleClick}>
                    <label style={{ color: "black" }}><b>{this.props.label}</b></label><br />
                    {this.getList()}
                    <button type="button" className="btn btn-info" onClick={() => {
                        document.getElementById("fileSelect").click()
                    }}>Add File</button>
                    <input type="file" id="fileSelect" className="btn btn-info" onChange={(e) => this.handleChange(e)} style={{ background: "white", color: "blue" }} hidden /><br /><br />
                </form>
                {this.getBrowseAgainLine()}
            </div>
        )
    }
}