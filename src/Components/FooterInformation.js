import React from "react";

const FooterInformation = (props) => {
    return(
        <div className="footer_information">
            <p className="information_heading">{props.heading}</p>
            <br />
            <p className="information_individual_elements">About Us</p>
            <br />
            <p className="information_individual_elements">Information</p>
            <br />
            <p className="information_individual_elements">Privacy Policy</p>
            <br />
            <p className="information_individual_elements">Terms & Conditions</p>
        </div>
    )
}
export default FooterInformation;