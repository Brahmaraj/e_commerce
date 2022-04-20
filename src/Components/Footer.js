import React from "react";
import FooterInformation from "./FooterInformation";
import facebook from "./Web/facebook.svg";
import twitter from "./Web/twitter.svg";
import master_card from "./Web/master_card.svg";
import visa from "./Web/visa.svg";
import western_union from "./Web/Western_union.svg";
import paypal from "./Web/Paypal.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_block_container">
                <div className="footer_blocks">
                    <p className="block1_heading">iSHOP</p>
                    <p className="footer_para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad vero deleniti earum error? Quia a quos deserunt impedit consequuntur labore fugiat, fugit nihil minima architecto voluptatem voluptas, possimus, commodi iure.</p>
                </div>
                <div className="footer_blocks">
                    <p className="block2_heading">Follow Us</p>
                    <div className="footer_para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    <div className="para_socials">
                        <img className="para_image" src={facebook} alt="facebook" />
                        <img className="para_image" src={twitter} alt="twitter" />
                    </div>
                    </div>
                </div>
                <div className="footer_blocks">
                    <p className="block2_heading">Contact Us</p>
                    <p className="footer_para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    <br />
                    Email : abc@gmail.com
                    </p>
                </div>
            </div>

            <div className="bottom_blocks">
                <FooterInformation heading="Information" />
                <FooterInformation heading="Services" />
                <FooterInformation heading="Extras" />
                <FooterInformation heading="My Account" />
                <FooterInformation heading="Useful Links" />
                <FooterInformation heading="Out Client" />
            </div>
            <div className="payments">
                <img className="payment_image" src={paypal} alt="paypal" />
                <img className="payment_image" src={western_union} alt="paypal" />
                <img className="payment_image" src={visa} alt="paypal" />
                <img className="payment_image" src={master_card} alt="paypal" />
            </div>
        </div>
    )
}

export default Footer;