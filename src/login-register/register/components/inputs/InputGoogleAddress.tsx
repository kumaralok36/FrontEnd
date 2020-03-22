import React from 'react';
import { GoogleComponent } from 'react-google-location';
import ProviderPastSessions from 'providers/body/ProviderPastSessions';
import InputGoogleMap from './InputGoogleMap';
import { stat } from 'fs';

interface props {
    handleAdd, label, page, arr, handlePrevPage,
    callbackNav: (callback: (skip: boolean) => any) => any
}
export default class InputGoogleAddress extends React.Component<props, any>{
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.callbackNav(this.callback);
    }
    state = {
        data: null,
        list: this.props.arr[this.props.page] === undefined ? [] : this.props.arr[this.props.page]
    }
    currentAddress:any

    setCurrentAddress=(state)=>{
        this.currentAddress=state
    }

    arr = this.props.arr;
    handleClick = (event = undefined) => {
        if (event) event.preventDefault();
        if (this.state.list.length > 0) {
            this.setState({ data: null }, () => {
                this.props.handleAdd(this.state.list);
            })
        }
        else
            this.props.handleAdd(undefined);
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
                {this.state.list.map(lEle => (
                    <div>{lEle.area}
                        <input type="button" style={{ background: "white", margin: "1%", height: "26px" }} value="x" onClick={() => { this.setState({ list: this.state.list.filter(li => { return (li !== lEle) }) }) }} />
                    </div>
                ))}
            </div>
        )
    }
    addToList = () => {
        if (this.currentAddress != null) {
            //  this.state.list.push(data);
            this.setState((prevState) => {
                prevState.list.push({ ...this.currentAddress });
                prevState.data = undefined;
                return prevState
            })
            //  this.setState({
            //      data:this.state.data
            //  },()=>{
            //     console.log(this.state.data);
            //  })

        }
    }
    render() {
        console.log("list address " + this.state.list.place);
        return (
            <div className="card-body">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.addToList();
                }} >
                    <div className="form-group">
                        <label style={{ color: "black" }}><b>{this.props.label}</b></label>
                        {this.getList()}
                        <div>
                            {/* <GoogleComponent
                                apiKey={'AIzaSyDDGLzjJ_1MmXB_54zqHguerZQXGKicw8k'}
                                language="en"
                                country={'country:in|country:us'}
                                coordinates={true}
                                onChange={(e) => { this.setState({ data: e }) }} /> */}
                            <InputGoogleMap center={{ lat: 18.5204, lng: 73.8567 }}
                                height='300px'
                                zoom={15} 
                                setCurrentAddress={this.setCurrentAddress}/>
                        </div><br />
                        <br /><br />
                        <input type="button" className="btn btn-info" value="Add" onClick={() => this.addToList()} />
                    </div>
                </form>
            </div>
        )
    }
}
