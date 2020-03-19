import React from 'react'
interface props{
    handleChangePage(i:number);
}
export default class FirstPageProviderRegister extends React.Component<props,any> {
    constructor(props) {
        super(props);

        // this.handleChangeEmail = this.handleChangeEmail.bind(this);
        // this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);

    }
    state = {
        email: undefined,
        checked: "false"
    }

    handleChangeCheckbox = ()=>{
        if (this.state.checked === "false")
            this.setState({ checked: "true" })
        else
            this.setState({ checked: "false" })
    }

    handleChangeEmail = (event)=>{
        this.setState({ email: event.target.value })
    }

    render() {
        return (
            <div className="container" style={{ padding: "10%" }}>
                <form>
                    <div className="form-group">
                        <label style={{ marginBottom: "20%", background: "pink", color: "black", padding: "0.85%", borderRadius: "2px" }}> Email : </label><br />
                        <input className="form-control" type="email" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Enter email"></input>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" checked={this.state.checked === "true"} onClick={this.handleChangeCheckbox} />
                        <label style={{ marginLeft: "2%" }}>Check this custom checkbox</label>
                    </div>
                </form>
                <button onClick={()=>{this.props.handleChangePage(2)}} className="btn btn-info">Next</button>

                <ul className="pagination" style={{ marginTop: "10%", marginLeft: "40%" }}>
                    <li className="page-item active"><a className="page-link" href="#" style={{ background: "pink" }}>1</a></li>
                    <li className="page-item disabled"><a className="page-link" href="#">2</a></li>
                    <li className="page-item disabled"><a className="page-link" href="#">3</a></li>
                </ul>
            </div>
        );
    }
}
