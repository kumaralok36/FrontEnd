import React, { Component } from 'react'

interface Props{
    address:{
        addressId:string
		name:string
	    lattitude:number
		longitude:number
		address:string
		parkAddress:string
    }
}
export default class AddressCard extends Component<Props, any> {

    changeAddress=()=>{

    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                    
                    </div>
                    <div className="card-body">
                        
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-sm btn-danger">Remove</button>
                    </div>
                </div>
            </>
        )
    }
}
