import React from "react";

export default function Contact(props){
    return (
    <div className = 'slides'>
        <div className= 'contact_header'>Contact Me</div>
        <form action="mailto:omardramirez2002@gmail.com">
            <div>
                <label for=""></label>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Name"
                    required  
                ></input>
            </div>
            <div>
                <label for=""></label>
                <input
                    className="form-input"
                    type="email"
                    placeholder="Email"
                    required
                ></input>
            </div>
            <div>
                <label
                    className="form-input"
                    type="date"
                    placeholder="email"
                    required
                ></label>
                <textarea
                    className="form-input"
                    type="text"
                    placeholder="Message"
                    required
                ></textarea>
            </div>
            <button type = 'button' className = 'submit_btn'>
                submit
            </button>
        </form>
    </div>
    );
}