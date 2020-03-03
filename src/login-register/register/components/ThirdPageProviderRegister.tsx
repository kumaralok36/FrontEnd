
import React from 'react';

export default class ThirdPageProviderRegister extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
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
                </div>
            </div>
        )
    }

}