import React, { Component } from 'react'
import ReactDOM from 'react-dom';

interface Props {
    callback: (newAddress:any) => any
}

export default class AddressModal extends Component<Props, any> {

    componentDidMount() {
        console.log("Mounting Address Component...");;
    }
    
    onAddedNewAddress(address:any){
        this.props.callback(address)
    }
    render() {
        return ReactDOM.createPortal(
            <>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </>
            , document.getElementById("myModal"))
    }
}

/*
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>
*/