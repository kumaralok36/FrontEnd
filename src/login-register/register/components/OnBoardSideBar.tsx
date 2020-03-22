import React, { Component } from 'react'
import Utility from 'utility/Utility'

interface Props {
    page:number,
    formOutputs: any[]
    questions: any[]
    handleChangePage: (n: number) => any
}
export default class OnBoardSideBar extends Component<Props, any> {

    getSidebarList = (arr) => {
        return (
            <div>
                {this.props.questions.map((value, index) => {
                    let color = index==this.props.page?"green":((arr[index] === undefined || (arr[index] === [] || arr[index][0] === []) ? "blue" : arr[index]==10E15? "orange" : "magenta"))
                    let pageChangeStatus = (arr[index] === undefined || (arr[index] === [] || arr[index][0] === []) ? false : arr[index]==10E15? true : false)

                    return <div style={{
                        cursor: "pointer"
                    }} className={`nav-item row`} key={index}
                        onClick={() => {
                            if (pageChangeStatus)
                                this.props.handleChangePage(index)
                            else{
                                Utility.showNotification("info", "You can only Move to the skipped questions!");
                            }
                        }}>
                        <div className="col-3" style={{paddingRight:10}}>
                        {/* <i className="material-icons pull-right" style={{color: "green", height:"100%"}}>vertical_align_center</i> */}
                        <img src="/assets/img/d-side.png" style={{background: color, height:"45px", objectFit:"contain"}}/>
                        </div>

                        <div className="col-9 h-45 my-auto">{value.shortName}</div>
                    </div>
                    // return <li className={ansStatus ? "btn btn-info" : "btn btn-success"} 
                    //         onClick={() => {
                    //             if(ansStatus)
                    //                 this.props.handleChangePage(index)
                    //         }} style={{ marginTop: "2%", color: "black", width: "100%" }}><b>{value.formName}</b></li>
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
                        <div style={{ paddingLeft: "20px", paddingTop: "10px", margin: "0px" }}>
                            {this.getSidebarList(this.props.formOutputs)}
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
