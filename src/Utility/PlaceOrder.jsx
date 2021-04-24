import React from 'react';
import mHistory from 'm-history';


export default class PlaceOrder extends React.Component {

    goToHome=()=>{
        sessionStorage.removeItem("cart");
        mHistory.push("/home");

    }

    render() {
        return (
            <div className="row mx-auto">
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal">
                Deliver Now
            </button>

            <div class="modal mt-auto"  id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Confirmation </h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body">
                            You will get a call on your registered mobile number once you place order.
                         </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>this.goToHome()}>Place Order</button>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        )
    }
}