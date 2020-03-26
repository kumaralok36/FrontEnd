import React from 'react'
import { isNumber } from 'util';

interface props {
    handleAdd, arr, label, page, handlePrevPage,
    callbackNav: (callback: (skip: boolean) => any) => any
}
export default class InputFile extends React.Component<props, any>{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.callbackNav(this.callback);
    }

    state = {
        name:"Select a File!",
        data: this.props.arr[this.props.page] === undefined || isNumber(this.props.arr[this.props.page])? undefined : this.props.arr[this.props.page]
    }
    handleChange = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            //console.log(e.target.result);
            this.setState({ name: files[0].name, data:e.target.result });
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

                <div style={{}}>{this.state.name}
                    {/* <input type="button" style={{margin:"1%",height:"26px",border:"1px solid white"}} value="x" onClick={()=>{this.setState({list:this.state.list.filter(li=>{return(li!==list)})})}}/> */}
                </div>

            </div>
        )
    }

    handleClick = (event=undefined) => {
        if(event) event.preventDefault();
        this.props.handleAdd(this.state);
        this.setState({
            data: undefined
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
                    }}>Browse File</button>
                    <input type="file" id="fileSelect" className="btn btn-info" onChange={(e) => this.handleChange(e)} style={{ background: "white", color: "blue" }} hidden /><br /><br />
                </form>
            </div>
        )
    }
}