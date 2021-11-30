import React from "react";
import AboutMe from "./pages/AboutMe";
console.log(AboutMe);

var Scroll = require('react-scroll');
var scroller = Scroll.scroller

// the npm package imports it through the require method

export default function Buttons(props){


    function active (event){
        var buttons = document.querySelectorAll('.Btn');
        event.preventDefault();
        console.log(event.target.classList)
        buttons.forEach(button => {
            if(button === event.target){
                button.classList.add('active')
            }
            else{
                button.classList.remove('active')
            }
        })
        console.log(buttons);
    }

    function elScroll(event){
        console.log(event.target.classList[1]);
        switch (event.target.classList[1]) {
            case 'one':
                scroller.scrollTo('home', {
                    duration: 1400,
                    delay: 100,
                    smooth: true,
                    offset: -800
                  } )
                break;
            case 'two':
                scroller.scrollTo('skills', {
                    duration: 1400,
                    delay: 100,
                    smooth: true,
                    offset: 5
                  } )
                break;
            case 'three':
                scroller.scrollTo('projects', {
                    duration: 1400,
                    delay: 100,
                    smooth: true,
                    offset: -800
                  } )
                break;
            case 'four':
                scroller.scrollTo('contact', {
                    duration: 1400,
                    delay: 100,
                    smooth: true,
                    offset: -800
                  } )
                break;
            default:
                break;
        }
       
    }
    
    function toAbout(){
        //toDo: this funciton is suppose to toggle the 
    }

    return (
    <div className = 'info'>
        <div onClick = { active, elScroll } className = {`btn one`} >Home</div>
        <div onClick = { active, elScroll } className = {`btn two`} >Skills</div>
        <div onClick = { active, elScroll } className = {`btn three `} >Projects</div>
        <div onClick = { active, elScroll } className = {`btn four `} >Contact Me</div>
        <div onClick = { active, toAbout } className = {`btn `} >About Me</div>
        {/* <div className ={`Btn five ${props.active ? "active": ""}`} >Home</div> */}
    </div>
    );
}