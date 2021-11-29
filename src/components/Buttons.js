import React from "react";

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

    return (
    <div className = 'info'>
        <div onClick = { active } className = {`btn one`} >Home</div>
        <div onClick = { active } className = {`btn two`} >Skills</div>
        <div onClick = { active } className = {`btn three `} >Projects</div>
        <div onClick = { active } className = {`btn four `} >Contact Me</div>
        <div onClick = { active } className = {`btn  `} >About Me</div>
        {/* <div className ={`Btn five ${props.active ? "active": ""}`} >Home</div> */}
    </div>
    );
}