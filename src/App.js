import React from "react";

import { Header, Footer, Blog, Features, Possibility, WhatGPT } from "./Containers";
import { CTA, Brand, Navbar} from "./Components"

import "./App.scss"

const App = () => {

    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            
            <Brand />
            <WhatGPT />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App