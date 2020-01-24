import React, { Component } from 'react'
import SessionType from 'session/SessionType';

interface Props{
    ind:number
    callback:(arr:string[])=>any
}
export default class SessionSubTypeComponent extends Component<Props, any> {
    state={
        selectElements:[]
    }
    onSelect=(ind:number)=>{
        this.setState(state=>{
            let pos=state.selectElements.indexOf(ind);
            if(pos==-1)
                state.selectElements.push(ind)
            else
                state.selectElements.splice(pos,1)
            return state;
        })
        
    }
    sendSelectedElements=()=>{
        let myEle=[]
        this.state.selectElements.forEach(element => {
            myEle.push(SessionType[this.props.ind].subCategory[element]);
        });
        this.props.callback(myEle);
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>What do want to keep in Check?</h5>
                            {SessionType[this.props.ind].subCategory.map((val, ind)=>{
                                return(
                                    <span key={ind} className={`badge badge-pill ${this.state.selectElements.indexOf(ind)==-1?"badge-light":"badge-primary"}`} style={{margin:"10px", padding:"10px", cursor:"pointer"}} onClick={()=>{this.onSelect(ind)}}>
                                    {val}</span>
                                )
                            })}
                            <br/><br/><br/>
                            <div className="row">
                                <button className="btn btn-block btn-info" onClick={()=>{
                                    this.props.callback(this.state.selectElements)
                                }} disabled={this.state.selectElements.length==0?true:false}>Continue</button>
                                <button className="btn btn-sm btn-outline mx-auto" onClick={()=>{
                                    this.sendSelectedElements();
                                }}>Back</button>
                            </div>
                            <br/>
                            <br/>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header card-card-header-image">
                                    <img className="img" src=""/>
                                </div>
                            </div>
                            <div className="card-body">
                                Something we need to write
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
