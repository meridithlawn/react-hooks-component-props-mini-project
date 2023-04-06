import React from "react";
import App from "./App"


function About ({about, image="https://via.placeholder.com/215"}) {
    console.log("look here,", image, about)
    return (
        <div id="about">
        <aside>
           <img src={image} alt="blog logo"></img>
           <p>{about}</p>
        </aside>
        </div>
    );

}

export default About;