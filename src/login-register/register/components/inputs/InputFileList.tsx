import React from 'react'
import { isNumber, isArray } from 'util';
import ProviderDashboard from 'providers/body/ProviderDashboard';

interface props {
    handleAdd, answers, label, page, handlePrevPage,
    questions,
    callbackNav: (callback: (skip: boolean) => any) => any
}
export default class InputFileList extends React.Component<props, any>{
    constructor(props) {
        super(props);

        let tList=[];
        if(isArray(this.props.questions[this.props.page].typeList)){
            tList = this.props.questions[this.props.page].typeList
        }else if(this.props.questions[this.props.page].type){
            if(this.props.answers[this.props.questions[this.props.page].type])
                tList = this.props.answers[this.props.questions[this.props.page].type];
        }
        this.state = {
            data: "File Name",
            list: this.props.answers[this.props.page] === undefined || isNumber(this.props.answers[this.props.page]) ? [] : this.props.answers[this.props.page],
            typeList: tList
        };
        //console.log(this.state);
    }

    componentDidMount() {
        this.props.callbackNav(this.callback);
    }


    handleChange = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            //console.log(e.target.result);
            this.setState((prevState)=>{
                prevState.list.push({name : files[0].name, data:e.target.result, type:"Select File Type"})
                prevState.data = undefined;
                // console.log(prevState, files[0]);
                return prevState;
            });
        }
    }

    callback = (skip: boolean) => {
        if (skip) {
            //

        } else {
            this.handleClick();
        }
    }

    getList = () => {
        return (
            <div className="container container-small">
                {this.state.list.map((listRoot, indexRoot) => (
                    <div className="row">
                        <div className="col-4">
                            {listRoot.name}
                        </div>
                        <div className="col-6">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {listRoot.type}
  </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {this.state.typeList.map((listEle, index)=>{
                                    return <a key={index} className="dropdown-item" href="#" 
                                            onClick={()=>{this.setState((pEle)=>{
                                                pEle.list[indexRoot].type=listEle;
                                                return pEle;
                                            })}}>{listEle}</a>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <input className="pull-right" type="button" style={{ margin: "1%", height: "26px", border: "1px solid white" }} value="x" onClick={() => {
                                this.setState({ list: this.state.list.filter(li => { return (li !== listRoot) }) });
                                var filesnew = this.state.files;
                                filesnew.splice(indexRoot, 1);
                                this.setState({ files: filesnew })
                            }} />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    handleClick = (event = undefined) => {
        if (event) event.preventDefault();
        
        this.setState({
            data: undefined
        }, () => {
            if (this.state.list.length > 0)
                this.props.handleAdd(this.state.list);
            else
                this.props.handleAdd(undefined);
        })
    }
    render() {
        return (

            <div className="card-body">
                <form onSubmit={this.handleClick}>
                    <label style={{ color: "black" }}><b>{this.props.label}</b></label><br />
                    {this.getList()}
                    <button type="button" className="btn btn-info" onClick={() => {
                        document.getElementById("fileSelect").click()
                    }}>Add File</button>
                    <input type="file" id="fileSelect" className="btn btn-info" onChange={(e) => this.handleChange(e)} style={{ background: "white", color: "blue" }} hidden /><br /><br />
                </form>
            </div>
        )
    }
}