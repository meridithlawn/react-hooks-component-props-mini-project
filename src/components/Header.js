import React from "react";
import blogData from "../data/blog";
import App from "./App";

function Header({name}) {
    console.log("name,", name)
    return (
        <header>
            <h1> {name} </h1>
        </header>
    )
}

export default Header;