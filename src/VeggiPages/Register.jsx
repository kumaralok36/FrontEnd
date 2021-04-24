import React from 'react';


export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            mobile:"",
            house_no:"",
            locality:"",
            pin:""
        }
    }

    handleChangeUsername=(e)=>{
        this.setState({username:e.target.value});
    }

    handleChangePassword=(e)=>{
        this.setState({password:e.target.value});
    }

    handleChangeMobile=(e)=>{
        this.setState({mobile:e.target.value});
    }

    handleChangeHouse_no=(e)=>{
        this.setState({house_no:e.target.value});
    }

    handleChangeLocality=(e)=>{
        this.setState({locality:e.target.value});
    }

    handleChangePin=(e)=>{
        this.setState({pin:e.target.value});
    }

    register=()=>{
        localStorage.setItem("username",this.state.username)
    }

    render(){
        return(
            <div className="container">
                <div className="row mt-5 m-auto">
                    <div className="card col-lg-5 m-auto">
                        <div className="card-body">
                            <div className="card-title text-center">
                                <h5 style={{color:"black"}}>Register</h5>
                            </div>
                            <form>
                                <div >
                                    <label>Name:</label>
                                    <input type="text" className="form-control" placeholder="First       Middle        Last" onChange={this.handleChangeName} />
                                </div><br/>
                                <div >
                                    <label>Email:</label>
                                    <input type="email" className="form-control" placeholder="email" onChange={this.handleChangeUsername}/>
                                </div><br/>
                                <div>
                                    <label >Password:</label>
                                    <input type="password" className="form-control" placeholder="password" onChange={this.handleChangePassword}/>
                                </div><br/>
                                <div>
                                    <label >Mobile:</label><br/>
                                    <input type="tel"  pattern="[0-9]{10}" className="form-control" placeholder="mobile" onChange={this.handleChangeMobile}/>
                                </div><br/><br/>
                                <div>
                                    <label >Address:</label><br/>
                                    <label >House/Flat no:</label>
                                    <input type="text" className="form-control" placeholder="house/flat" onChange={this.handleChangeHouse_no}/><br/>

                                    <label >Locality</label>
                                    <input type="text" className="form-control" placeholder="loaction" onChange={this.handleChangeLocality}/><br/>

                                    <label >Pin:</label><br/>
                                    <input type="text" pattern="[0-9]{6}" className="form-control" placeholder="pin" onChange={this.handleChangePin}/>

                                </div>

                                <button className="btn btn-danger mt-2 " type="submit" onClick={()=>this.register()}>Submit</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}