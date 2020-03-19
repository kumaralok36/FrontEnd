import React, { Component } from 'react'

interface Props {
    myCallback: (b: boolean) => any
    handleSkipButton: () => any
    questions: any[]
    page: number
}

export default class OnBoardFooter extends Component<Props, any> {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-white navbar-absolute fixed-bottom" style={this.props.page<2?{ bottom: "-20px" }:{ bottom: "-55px" }}>
                    <div className="container-fluid">
                        <div className="container">
                            <button className="btn btn-info pull-right" onClick={() => {
                                this.props.myCallback(false);
                            }}>Submit</button>
                            {(this.props.page >= 0 && this.props.questions[this.props.page]["canSkip"]) && <button className="btn btn-btn-default pull-right" onClick={this.props.handleSkipButton}>Save for Later</button>}
                        </div>
                    </div>
                </nav>
                {/* <div style={{
                    position: "fixed",
                    right: 0,
                    bottom: 0,
                    backgroundColor: "white",
                    padding: "15px"
                }} className="container-fluid">
                    <div className="container">
                        <button className="btn btn-info pull-right" onClick={() => {
                            this.props.myCallback(false);
                        }}>Submit</button>
                        {(this.props.page >= 0 && this.props.questions[this.props.page]["canSkip"]) && <button className="btn btn-btn-default pull-right" onClick={this.props.handleSkipButton}>Save for Later</button>}
                    </div>
                </div> */}
            </>
        )
    }
}
