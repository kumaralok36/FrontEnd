import React from 'react';

export default class SecondPageProviderRegister extends React.Component {
constructor(props){
    super(props);
    
    this.handleChangeCoaching=this.handleChangeCoaching.bind(this);
    this.handleChangeTelehealth=this.handleChangeTelehealth.bind(this);
}
state={
    coaching:false,
    telehealth:false
}

handleChangeCoaching()
{
    this.setState({coaching: !(this.state.coaching)});
}

handleChangeTelehealth()
{
    this.setState({telehealth:!(this.state.telehealth)});
}

render(){
    console.log(this.state.coaching);
    return(
        <div className="container col-sm-7">
            <div className="card">
                <div className="card-header" style={{background:"green"}}></div>
                <div className="card-body">
                    <div><h3>Futura.Health Registration</h3></div>
                    <div>Sign up to receive more information about becoming a provider in the Futura.Health ecosysteming, including Therapy on Demand</div>
                </div>
                <div className="card-footer" style={{color:"red"}}>required*</div>

            </div>
            <div className="card">
                <div className="card-body" style={{height:"150px"}}>
                    <form style={{padding:"5%"}}>
                        <div className="form-group">
                            
                            <label style={{color:"black"}}>Full name and title *</label><br/>
                            <input type="text" className="form-control" placeholder="Your answer"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card">
                <div className="card-body" style={{height:"150px"}}>
                <form style={{padding:"5%"}}>
                        <div className="form-group">
                            
                            <label style={{color:"black"}}>Email *</label><br/>
                            <input type="text" className="form-control" placeholder="Your answer"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card">
                <div className="card-body" style={{height:"150px"}}>
                <form style={{padding:"5%"}}>
                        <div className="form-group">
                            
                            <label style={{color:"black"}}>Phone number *</label><br/>
                            <input type="tel" className="form-control" placeholder="Your answer"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card">
                <div className="card-body" style={{height:"150px"}}>
                <form style={{padding:"5%"}}>
                        <div className="form-group">
                            
                            <label style={{color:"black"}}>Language(s) spoken / skill level  *</label><br/>
                            <input type="text" className="form-control" placeholder="Your answer"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card">
                <div className="card-header">Provider Type(s) *</div>
                <div className="card-body">
                    
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" style={{marginRight:"1%"}}onClick={this.handleChangeCoaching} checked={this.state.coaching}/>
                        <label style={{color:"black"}}>Coaching (Health, Wellness, et. al)</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" style={{marginRight:"1%"}} checked={this.state.telehealth} onClick={this.handleChangeTelehealth} />
                        <label style={{color:"black"}}>Telehealth (Clinical license types only)</label>
                    </div>
                        
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label style={{color:"black"}}>Please list your license and/or certification type(s) by location(s) for telehealth & geographic service areas if you plan to opt-in to provide on-site services.</label><br/><br/>
                            <input type="text" className="form-control" placeholder="Your answer" style={{marginTop:"1%"}}/>


                        </div>
                    </form>
                </div>
            </div>
            <a href="/register-provider-secondform" className="btn btn-info" role="button" style={{background:"green"}}>Submit</a>
        </div>
    )
}

}