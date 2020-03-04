import React from 'react'

export default class UploadFile extends React.Component{
    constructor(props){
        super(props);

    }

    handleChange=(e)=>{
        let files=e.target.files;
        let reader=new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=(e)=>{
            console.log(e.target.result);
        }
    }
    render(){
        return(
            <div>
                <input type="file" className="btn btn-info" onChange={(e)=>this.handleChange(e)} style={{background:"white",color:"blue"}}/>
            </div>
        )
    }
}