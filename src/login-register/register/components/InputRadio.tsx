import React from 'react';

interface props { values, handleAdd, handlePrevPage, page, arr, label,
    callbackNav:(callback:(skip:boolean)=>any)=>any }
export default class InputRadio extends React.Component<props, any>{

    constructor(props) {
        super(props);
     
        this.state = {
            data: this.props.arr[this.props.page] === "" ? [false, false, false] : this.props.arr[this.props.page]
        }
    }

    componentDidMount(){
        this.props.callbackNav(this.callback);
    }
    
    callback=(skip:boolean)=>{
        if(skip){
            //
            
        }else{
            this.handleClick();
        }
    }
    
    getButtons = () => {
        return (
            <div>
                {this.props.values.map((value, index) => (
                    <tr>
                        <td><input type="radio" checked={this.state.data[index]} onClick={() => { this.handleStatus(index) }} /></td>
                        <td><label style={{ marginLeft: "2%", color: "black" }}>{value.name}</label></td>
                    </tr>
                ))}
            </div>
        )
    }
    handleStatus=(index)=>{
        var datan=this.state.data;
        datan[index]=!datan[index];
        this.setState({
            data:datan
        })
    }

    handleClick = () => {
        this.props.handleAdd(this.state.data);
    }

    render() {
        return (
            <div className="card-body">
                <label style={{ color: "black" }}>{this.props.label}</label><br /><br />
                <div className="radio">
                    <form>
                        <table>
                            {this.getButtons()}
                        </table>
                    </form>

                </div>
                <input type="button" value="prev" className="btn btn-info" onClick={() => this.props.handlePrevPage(this.props.page)} />
                <input style={{marginLeft:"1%"}} type="button" value="next" className="btn btn-info" onClick={this.handleClick} />
            </div>
        )
    }

}