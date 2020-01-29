import React, { Component } from 'react'
import routes from "../routes";

export interface Props {
    changeSelection: (n: number) => any,
    activeIndex: number
}

export default class ProviderSideBar extends Component<Props, any>{

    // constructor(props:Props) {
    //     super(props)

    //     this.state = {

    //     }
    // }

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
                        <ul className="nav">
                            {routes.map((route, index, routes) => {
                                return (
                                    <li style={{
                                        cursor:"pointer"
                                    }} className={`nav-item ${(this.props.activeIndex == index) ? "active" : ""}`} key={index}>
                                        <a className="nav-link" onClick={() => { this.props.changeSelection(index) }}>
                                            <i className="material-icons">{route.icon}</i>
                                            <p>{route.name}</p>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </>
        )
    }
}
