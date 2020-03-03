
import React from 'react';

export default class ThirdPageProviderRegister extends React.Component {
    constructor(props) {
        super(props);

        // this.handleChangeAgree = this.handleChangeAgree.bind(this);
    }
    state = {
        agree: false
    }

    handleChangeAgree = ()=>{
        this.setState({ agree: !(this.state.agree) })
    }

    render() {
        return (
            <div className="container col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <div><h3>Futura.Health - Provider Enrollment Form</h3></div>
                        <div>Thanks for taking the first step toward becoming a Therapy on Demand Provider. You can learn more about the provider role by downloading our PDF brochure using this link:</div>
                        <div><a href="https://jmp.sh/Mxn6Y8g/">https://jmp.sh/Mxn6Y8g/</a></div>
                    </div>
                    <div className="card-body">
                        <div>Submission of this enrollment certifies your agreement with the 1. NDA/NC/NCA, 2. Security & BA Agreement 3. Investigations Authorization Form, and 4. Release of Liability & Photo/Video Release documents hosted at: </div>
                        <div><a href="https://therapyprovider.blogspot.com/">https://therapyprovider.blogspot.com/</a></div>
                    </div>
                    <div className="card-body">
                        <div>Enrollment does not constitute an offer of employment. Submission of this form does not guarantee acceptance to the platform. The platform reserves the right to change fees, payment structure, and other requirements at any time. We will provide email notice of any such changes. </div>
                    </div>
                    <div className="card-body">
                        <div>Please review the requirements for the provider biography, photo and video requirements in the link above. If you have comments or questions, please email (preferred) or call:
                          Adam Parsons, Executive Director & Occupational Therapist </div>
                        <div><a href="info@therapyondemand.io">info@therapyondemand.io</a></div>
                        <div>+1-707-974-2951</div>
                    </div>
                    <div className="card-body">
                        <div style={{ color: "red" }}>* Required </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body" style={{ height: "150px" }}>
                        <form style={{ padding: "5%" }}>
                            <div className="form-group">

                                <label style={{ color: "black" }}>Email Address *</label><br />
                                <input type="text" className="form-control" placeholder="Your email" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form style={{ padding: "5%" }}>
                            <div className="form-group">
                                <label style={{ color: "black" }}>Name *</label><br />
                                <input className="form-control" type="text" placeholder="Your answer" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>I consent that my signature (to be submitted below) is to be used as as my legal and valid signed signature and will be appended to each of the documents 1-5 (linked above). If you do NOT agree to the terms of all of these agreements, please exit this form. * </div><br />
                        <div className="radio">
                            <form>
                                <input type="radio" checked={this.state.agree} onClick={this.handleChangeAgree} style={{ marginRight: "1%" }} />
                                <label>I agree</label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>Upload your signature. To sign using your device, visit: <a href="https://www.mylivesignature.com/draw-signature ">https://www.mylivesignature.com/draw-signature </a> *</div>
                        <a className="btn btn-info" style={{ background: "white" }}> Add File</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <div><label style={{ color: "black" }}>Input your phone number including country & area code (for internal-use only) *</label></div><br />
                                <input className="form-control" type="text" placeholder="Your answer" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>Upload a copy of your government-issued ID (for example: national identity card). Your current mailing address must be listed. [FRONT] *</div>
                        <a className="btn btn-info" style={{ background: "white" }}> Add File</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>Upload a copy of your government-issued ID [BACK] *</div>
                        <a className="btn btn-info" style={{ background: "white" }}> Add File</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>Please upload a copy (front and back) of each license/certification listed above. *</div>
                        <a className="btn btn-info" style={{ background: "white" }}> Add File</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <div> <label style={{ color: "black" }}>Please list your active and valid healthcare license(s) and/or coaching certificates. Include the contact information for primary-source validation of each document. *</label></div><br />
                                <input className="form-control" type="text" placeholder="Your answer" style={{ marginTop: "2%" }} />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }

}