import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";

const Layout: React.FC = (props) => {
    return (
        <>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </>
    )
}

export default Layout;