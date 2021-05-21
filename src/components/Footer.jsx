import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return <p>
    <footer>
        Copyright © {year}
        </footer>
    </p>
}
export default Footer;