import React from 'react';
import "./AddressInput.css";
import SearchBar from '../InputForm';

function AddressInput() {
    return (
        <div className="address_input">
            <div className="information">
                <h1 className="h1_information">
                    Roof inspections made remote and easy
                </h1>
                <h4>
                    Get your roof inspected remotely and connect with our trusted roofers
                </h4>
            </div>
            <div className="input_block">
                <div class="input_img">
                    <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f13618db066ca1a332318d1_home%403x.png" width="30" alt="" class="location_image"/>
                </div>
                <div className="input_box">
                    {/* <input type="text" placeholder="Enter Your Address"></input> */}
                    <SearchBar />
                </div>
                <div className="button">
                    <input type="submit" value="Get Inspection"></input>
                    {/* <SearchBar /> */}
                </div>
            </div>
        </div>
    )
}

export default AddressInput;
