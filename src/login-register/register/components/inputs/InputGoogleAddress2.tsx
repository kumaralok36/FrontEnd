import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,getLatLng
} from 'react-places-autocomplete';

export default function InputGoogleAaddess2(){
    const [address,setAddress]= React.useState("");
    const [coordinates,setCoordinates]=React.useState({
        lat:null,
        lng:null
    })
    const handleSelect=async (value)=>{
        const results =await geocodeByAddress(value);
        //console.log(results);
         const latLng=await getLatLng(results[0]);
         setAddress(value);
         setCoordinates(latLng);
    };
    return(
        <div>
            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                {({getInputProps,suggestions,getSuggestionItemProps,loading})=>(
                <div className="form-group">
                    <p>latitude:{coordinates.lat}</p>
                    <p>longitude:{coordinates.lng}</p>
                    <label style={{ color: "black" }}><b>Enter your Address</b></label>
                    <input {...getInputProps({placeholder:"Type address"})} className="form-control"/>
                    <div>
                        {loading?<div>...loading</div>:null}
                        {suggestions.map((suggestion)=>{
                            const style={
                                backgroundColor:suggestion.active? "#41b6e6" :"#fff"
                            };
                            return <div {...getSuggestionItemProps(suggestion,{style})}>
                                {suggestion.description}
                            </div>
                        })}
                    </div>
                </div>  
                )}
            </PlacesAutocomplete>
        </div>
    )



}