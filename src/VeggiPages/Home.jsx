import React from 'react';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import mHistory from 'm-history';
import VeggiCard from 'Utility/VeggiCard';


export default class Home extends React.Component{
  constructor(props){
      super(props);
  }

  
  component(){
      this.setState({vegCart:localStorage.getItem("cart")})
  }


    render(){
        return(
            <div className="conatiner">
                <div className="row m-auto">
                    <div className="col-md-4 welcomeCard">
                        <div className="card mb-4px bg-primary">
                            <h4 className="card-title m-auto">Welcome</h4>
                            <div className="card-body m-auto">
                                <p>Vegetables are called protective food as their consumption can preventive several diseases. Vegetable plays an important role in the balanced diet by providing not only energy, but also supplying vital protective nutrients like-minerals and vitamins.</p>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-8 ml-auto">
                            <VeggiCard/>
                    </div>
                </div>
                {/* {this.getCheckoutButton()} */}
                
            </div>
        )
    }
}