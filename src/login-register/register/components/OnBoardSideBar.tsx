import React, { Component } from 'react'

interface Props{
    formOutputs:any[]
    questions:any[]
    handleChangePage:(n:number)=>any
}
export default class OnBoardSideBar extends Component<Props, any> {

    getSidebarList = (arr) => {
        var arrQuest = this.props.questions;
        return (
            <div>
                {this.props.questions.map((value, index) => {
                    let ansStatus = (arr[index] == "" || arr[index] == [] || arr[index][0] === []);
                    return <li className={ansStatus ? "btn btn-info" : "btn btn-success"} 
                            onClick={() => {
                                if(!ansStatus)
                                    this.props.handleChangePage(index)
                            }} style={{ marginTop: "2%", color: "black", width: "100%" }}><b>{value.formName}</b></li>
                })}
            </div>
        )
    }

    render() {
        return (
            <>
                <div className="sidebar" data-color="purple" data-background-color="white" data-image="assets/img/sidebar-3.jpg">
                    <div className="logo">
                        <a href="/" className="simple-text logo-normal">
                            Therapy on Demand
                        </a>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav nav-pills nav-stacked ">
                            <div className="row-contents" style={{ padding: "6%" }}>
                            {this.getSidebarList(this.props.formOutputs)}
                            </div>
                        </ul><br></br>
                    </div>
                </div>

            </>
        )
    }
}
