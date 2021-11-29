import React from "react";
import Home from "../Home";
import Skills from "../Skills";
import Projects from "../Projects";
import Footer from "../Footer";
import Contact from "../Contact";
import '../../styles/App.css'

export default function Main(props){
return( 
<div>
    <Home />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
</div>
);
}