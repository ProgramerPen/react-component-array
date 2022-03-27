import React from "react";
import "../App.css";

function Footer() {
    const har = new Date();
    const year = har.getFullYear();
    
    return (
        
        <div>
            <footer><p>Copyright {year}</p></footer>
        </div>

    );

};
export default Footer;