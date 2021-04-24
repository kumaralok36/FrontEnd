import React from 'react';
import download from './index.jpg'
import { vegetables } from 'Utility/vegetables';
import CheckoutButton from './CheckoutButton';

export default class VeggiCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            veggis: vegetables,
            vegcart: []
        }

    }

    componentWillMount() {
        var cart = [];
        this.state.veggis.map(veggi =>
            cart.push(0)
        );
        this.setState({ vegcart: cart });

        if (sessionStorage.getItem("cart") !== null)
            this.setState({ vegcart: JSON.parse(sessionStorage.getItem("cart")) })
    }

    addToCart = (index) => {
        var cart = this.state.vegcart;
        cart[index] = cart[index] + 1;
        this.setState({ vegcart: cart });
        sessionStorage.setItem("cart",JSON.stringify(cart));
    }

    removeFromCart = (index) => {
        var cart = this.state.vegcart;
        cart[index] = cart[index] - 1;
        this.setState({ vegcart: cart });
        sessionStorage.setItem("cart",JSON.stringify(cart));
    }

    displayCart = (index) => {
        if (this.state.vegcart[index] > 0)
            return (
                <div className="ml-2 mb-2 bg-white">
                    <a className="btn bg-white text-danger" onClick={() => this.removeFromCart(index)}>-</a>
                    <span className="text-danger " style={{ margin: "5px" }}>{this.state.vegcart[index]}</span>
                    <a className="btn bg-white text-danger" onClick={() => this.addToCart(index)}>+</a>
                </div>
            )
        else
            
            return (
                <div className="ml-2 mb-2">
                    <button className="btn btn-danger" onClick={() => this.addToCart(index)}>Add</button>
                </div>
            )
            
    }

    getVeggiCards = () => {
        return (
            this.state.veggis.map((veggi, index) =>
                <div className=" col-lg-4 col-md-5 col-sm-5 m-auto ">
                    <div className="card mt-auto">
                        <img className="card-img-top" src={download} alt="Card image" />
                        <div className="card-body m-auto">
                            <div className="card-header text-bold">
                                <h5>{veggi.name}</h5>
                            </div>
                            <div className=" text-danger">
                                {veggi.description}

                            </div>

                        </div>
                        <div className="card-footer text-danger">
                            <span>₹{veggi.price} (1kg)</span>
                        </div>
                        {this.displayCart(index)}
                    </div>

                </div>
            )
        )
    }

    render() {
        return (
            <div>
                <div className="row m-auto">
                    {this.getVeggiCards()}
                </div>
                <CheckoutButton vegcart={this.state.vegcart} />
            </div>

        )
    }
}