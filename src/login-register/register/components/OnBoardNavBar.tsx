import React, { Component } from 'react'

interface Props {
    page: number
}

export default class OnBoardNavBar extends Component<Props, any> {
    render() {
        return (
            <>
                {this.props.page < 2 ?
                    <nav className="navbar navbar-light navbar-expand-lg navbar-absolute fixed-top">
                        <div className="container">
                            <span className="navbar-text">
                                Therapy on Demand - Register Your Email
</span>
                        </div>
                    </nav>
                    :
                    <>
                        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                            <div className="container-fluid">
                                <div className="navbar-wrapper">
                                    <a className="navbar-brand" href="#pablo">Provider Dashboard</a>
                                </div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="navbar-toggler-icon icon-bar"></span>
                                    <span className="navbar-toggler-icon icon-bar"></span>
                                    <span className="navbar-toggler-icon icon-bar"></span>
                                </button>
                            </div>
                        </nav>

                    </>
                }
            </>
        )
    }
}
