import React from 'react';
import './Footer.css';
// var style = {
//     backgroundColor: "#F8F8F8",
//     borderTop: "1px solid #E7E7E7",
//     textAlign: "center",
//     padding: "20px",
//     position: "sticky",
//     left: "0",
//     bottom: "0",
//     height: "60px",
//     width: "100%",
// }

// var phantom = {
//   display: 'block',
//   padding: '20px',
//   height: '60px',
//   width: '100%',
// }

const Footer = () => {
    return (
        <footer className="fixed-bottom position-sticky-text-muted align-items-center footer-dark pt-0.5 bg-dark">
            <div className="footer-copyright text-center py-3">©2020</div>
        </footer>
    )
}

export default Footer;