import React from 'react';
import { vegetables } from 'Utility/vegetables';
import download from 'Utility/index.jpg'
import mHistory from 'm-history';
import PlaceOrder from 'Utility/PlaceOrder';

export default class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            veggis: vegetables,
            vegcart: JSON.parse(sessionStorage.getItem("cart")),
            couponText:"",
            couponApplied:""
        }
    }

    handleChangeCouponText=(e)=>{
        this.setState({couponText:e.target.value})
    }

    getCartItems = () => {
        return (
            this.state.veggis.map((veg, index) =>

                this.getCartRow(veg, index)

            )
        )

    }

    getCartRow = (veg, index) => {
        if (this.state.vegcart[index] > 0)
            return (
                <div className="row mb-2 " style={{borderBottom:"2px solid grey" }}>
                    <div className="col-3 tdata my-auto m-auto ">

                        <img className="card-img-top" src={download} alt="Card image" />

                    </div>
                    <div className="col-3 tdata my-auto mx-auto">
                        {veg.name} <span>({this.state.vegcart[index]})</span>

                    </div>
                    {/* <div className="col-2 tdata my-auto">
                {this.state.vegcart[index]}
    
            </div> */}
                    <div className="col-3 tdata my-auto mx-auto">
                        ₹{veg.price}

                    </div>
                    <div className="col-3 tdata my-auto mx-auto">
                        ₹{(veg.price) * (this.state.vegcart[index])}

                    </div>

                </div>
            )

    }
    getTotalPayableAmount=()=>{
       
        return Math.round((1 - (this.getDiscount(this.state.couponApplied)))*(this.getTotalAmount())) + (this.getDeliveryCharge());
    }

    getDeliveryCharge=()=>{
        return 50;
    }

    getDiscount=(coupon)=>{
         if (coupon===("life".toLocaleUpperCase()))
         return 0.3;
         else
         return 0;
    }

    getTotalAmount=()=>{
        var amount=0;
        this.state.vegcart.map((veg,index)=>
        {
        if(veg>0)
        amount=amount+(this.state.veggis[index].price)*(veg);
        });
        return amount;
    }
    
    displayCoupon=()=>{
        if(this.state.couponApplied!=="")
        if(this.getDiscount(this.state.couponApplied)>0)
        return(
            <div className="row bg-white mb-2" style={{borderRadius:"4px"}}>
                <div className="col-xs-5 ml-3"  style={{color:"red"}}>
                    Discount <span >({this.state.couponApplied.toLocaleUpperCase()})</span>
                </div>
                <div className="col-xs-2 ml-auto mr-4 " style={{color:"red"}}>
                    -₹{Math.round((this.getDiscount(this.state.couponApplied))*(this.getTotalAmount()))}

                </div>

            </div>
        )
    }

    render() {
        console.log(sessionStorage.getItem("cart"));
        if(sessionStorage.getItem("username")===null)
            mHistory.push("/login")
        return (
            <div className="container main">
                <div className="row m-auto">
                    <div className="card col-lg-6 col-md-8 m-auto pd-auto cart" >
                        <div className="card-header m-auto">
                            <span style={{ color: "red",fontSize:"18px" }}>Review Cart</span>
                        </div>
                        <div className="card-body mb-4" style={{border:"0px solid red" ,borderRight:"0px solid red", borderRadius:"4px"}}>
                            <div className="row">
                                <div className="col-3 thead m-auto">

                                </div>

                                <div className="col-3 thead mx-auto">
                                    Name

                                </div>
                                {/* <div className="col-sm-2 thead">
                                    Items

                                </div> */}
                                <div className="col-3 thead mx-auto">
                                    Price

                                </div>
                                <div className="col-3 thead ">
                                    SubTotal

                                </div>

                            </div>
                            {this.getCartItems()}
                            <div className="row bg-white mb-2" style={{borderRadius:"4px"}}>
                                <div className="col-xs-5 thead ml-3" >
                                    Delivery Charges
                                </div>
                                <div className="col-xs-2 ml-auto mr-4 thead">
                                    ₹50

                                </div>

                            </div>
                            {this.displayCoupon()}
                            <div className="row bg-white " style={{borderRadius:"4px"}}>
                                <div className="col-xs-5  thead ml-3">
                                    Total Amount to be paid
                                </div>
                                <div className="col-xs-2 ml-auto mr-4 thead" style={{ color: "red", borderRadius: "4px" }}> 
                                    ₹{this.getTotalPayableAmount()}
                                </div>

                            </div>

                        </div>
                        <div className=" col-sm-8 m-auto mt-2">
                            <div className="row m-auto">
                                <input className="col-sm-9 form-control  pd-auto " type="text" value={this.state.couponText} onChange={this.handleChangeCouponText} placeholder="apply coupon" style={{border:"3px solid white"}}/>
                                <a className="col-sm-4  mb-2 btn btn-danger text-white mb-4 " onClick={()=>this.setState({couponApplied:this.state.couponText.toLocaleUpperCase() , couponText:""})}>Apply</a>

                            </div>
                        </div>
                        <PlaceOrder/>


                    </div>
                </div>
                

            </div>
        )
    }
}