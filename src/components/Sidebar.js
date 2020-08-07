import React from 'react';
import mightycoder from '../assets/mightycoder.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import tie from '../assets/icons/tie.svg'
import pin from '../assets/icons/pin.svg'
import github from '../assets/icons/github.svg'

const Sidebar = () => {
    return (
        <div className="sidebar">

            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <h3 className='sidebar__name'><span>Sumit</span> Dey</h3>
            <div className="sidebar__title sidebar__item">web developer</div>

            <a href="!#" download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" /> download resume
                </div>
            </a>

            <figure className="sidebar__social-icons">
                <a href="!#"><img src={facebook} alt="facebook" className="sidebar__icon" /></a>
                <a href="!#"><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
            </figure>

            <div className="sidebar__contact">
                <div className="sidebar__item">
                    <img src={pin} alt="pin" className="sidebar__icon mr-2" />Kolkata , India
                </div>
                <a href="!#"><div className="github sidebar__item"> <img src={github} alt="git" className="sidebar__icon mr-2" />  github </div></a>
                <div className="sidebar__item"> code.sumax@gmail.com </div>
                <div className="sidebar__item"> 8514961767 / 8640960371 </div>

            </div>

            <div className="sidebar__email sidebar__item"> email me </div>

        </div>
    );
};

export default Sidebar;