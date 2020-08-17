import React from "react";

const Footer = () => {
    var time = new Date().getFullYear();


    return(
        <>
        
        
            <p className="text-center foot">Copyright {time}</p>
      
            
        </>
    )
}

export default Footer;