import React, { Component } from 'react'
import ReactDOM from 'react-dom';

interface Props{
    callback:()=>any
}

export default class AddressModal extends Component<Props, any> {

    componentDidMount(){

    }

    render() {
        return ReactDOM.createPortal(
            <>
                
            </>
        , document.getElementById("myModal"))
    }
}

/*
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>
*/