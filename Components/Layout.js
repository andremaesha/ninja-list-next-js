import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Head>
                <script
                    src="https://www.google.com/recaptcha/api.js"
                    async
                    defer
                ></script>
            </Head>
            <Navbar />
            {children}
            <Footer />
            <div
                className="g-recaptcha"
                data-sitekey="6LfaTxcdAAAAAD4mfBVO_IZxhuwGXFc7h2lkzVYA"
                data-size="invisible"
            ></div>
        </div>
    );
};

export default Layout;
