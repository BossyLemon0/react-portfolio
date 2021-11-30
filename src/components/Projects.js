import React from "react";
// import '../styles/App.css';
import '../styles/Projects.css'

export default function Projects(props){
    return (
    <div className = 'slides'>
        <div className = 'project_container'>
            <div className='row'>
                <div className='column'>
                    <div className='pic1'>picholder</div>
                    <div className='text'>one</div>
                </div>
                <div className='column'>
                    <div className='pic2'>picholder</div>
                    <div className='text'>two</div>
                </div>
                <div className='column'>
                    <div className='pic3'>picholder</div>
                    <div className='text'>three</div>
                </div>
            </div>
            <div className='row'>
                <div className='column'>
                    <div className='pic4'>picholder</div>
                    <div className='text'>four</div>
                </div>
                <div className='column'>
                    <div className='pic5'>picholder</div>
                    <div className='text'>five</div>
                </div>
                <div className='column'>
                    <div className='pic6'>picholder</div>
                    <div className='text'>six</div>
                </div>
            </div>
        </div>
    </div>
    );
}