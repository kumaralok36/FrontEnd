import React from 'react';
import mHistory from 'm-history';
import { Redirect } from 'react-router';



export default class CheckoutButton extends React.Component{

  getCheckoutButton=()=>{
      var cart=this.props.vegcart;
      var count=0;
    for(var i=0;i< cart.length;i++)
       if(cart[i]>0)
       count++;
    
    if(count>0)
    return(
        <div className="row">
            <div className="col-sm-4 m-auto">
                <a className="btn btn-danger ml-auto text-white" onClick={()=>this.goToCart()}>Proceed to Checkout</a>
            </div>
    </div>
    )   
  }

  goToCart=()=>{
      sessionStorage.setItem("cart",JSON.stringify(this.props.vegcart));
      if(sessionStorage.getItem("username")===null)
      mHistory.push("/login");
      else
      mHistory.push("/cart");
  }
  componentWillUpdate(){
      console.log(sessionStorage.getItem("cart"));
  }
    render(){
        return(
            <div>
            {this.getCheckoutButton()}
            </div>

        )
    }
}