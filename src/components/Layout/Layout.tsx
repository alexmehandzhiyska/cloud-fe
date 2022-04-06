import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";

import './Layout.css';

const Layout: React.FC = (props) => {
    return (
        <div>
            <Header></Header>
            <main>{props.children}</main>
            <Footer></Footer>
        </div>
    )
}

export default Layout;