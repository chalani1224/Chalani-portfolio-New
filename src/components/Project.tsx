import React from "react";
import book from '../assets/images/book.png';
import home from '../assets/images/home.png';
import event from '../assets/images/event.png';
import zara from '../assets/images/zara.png';
import clean from '../assets/images/clean.png';
import police from '../assets/images/police.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.figma.com/design/uddBJqh8IVEK8shVKBW9cD/Books-Delivery-App?node-id=1669-162202&p=f&t=0vbMYeYMaH89pXaO-0" target="_blank" rel="noreferrer">
                        <img src={book} className="zoom" alt="book delivery thumbnail" width="50%" />
                    </a>
                    <a href="https://www.figma.com/design/uddBJqh8IVEK8shVKBW9cD/Books-Delivery-App?node-id=1669-162202&p=f&t=0vbMYeYMaH89pXaO-0" target="_blank" rel="noreferrer">
                        <h2>Books Delivery App</h2>
                    </a>
                    <p>Designed the user interface in book delivery App</p>
                </div>

                <div className="project">
                    <a href="https://www.figma.com/design/78Mwi1sCHb4vXfgQcOq2ug/HMC?node-id=3-22&p=f&t=tyLcuWkEzpKQ8PAs-0" target="_blank" rel="noreferrer">
                        <img src={home} className="zoom" alt="home made cake thumbnail" width="50%" />
                    </a>
                    <a href="https://www.figma.com/design/78Mwi1sCHb4vXfgQcOq2ug/HMC?node-id=3-22&p=f&t=tyLcuWkEzpKQ8PAs-0" target="_blank" rel="noreferrer">
                        <h2>Home Made Cake</h2>
                    </a>
                    <p>Designed a very attractive user interface for a home made cake website</p>
                </div>

                <div className="project">
                    <a href="https://www.figma.com/design/dzhukcWpY1SOi6YWn2JOs8/Event-booking?node-id=0-1&p=f&t=tyLcuWkEzpKQ8PAs-0" target="_blank" rel="noreferrer">
                        <img src={event} className="zoom" alt="event booking app thumbnail" width="50%" />
                    </a>
                    <a href="https://www.figma.com/design/dzhukcWpY1SOi6YWn2JOs8/Event-booking?node-id=0-1&p=f&t=tyLcuWkEzpKQ8PAs-0" target="_blank" rel="noreferrer">
                        <h2>Event Booking App</h2>
                    </a>
                    <p>Designed the event booking app that helps users find event matching their interests</p>
                </div>

                <div className="project">
                    <a href="https://www.figma.com/design/0DPDXfRvhVhDCk6MRCSJxS/HCI?node-id=1-2&t=tyLcuWkEzpKQ8PAs-0" target="_blank" rel="noreferrer">
                        <img src={zara} className="zoom" alt="ZARA website thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/design/0DPDXfRvhVhDCk6MRCSJxS/HCI?node-id=1-2&t=tyLcuWkEzpKQ8PAs-0" target="_blank" rel="noreferrer">
                        <h2>ZARA website</h2>
                    </a>
                    <p>ZARA Website Recreated UI/UX Design (University Group Project)</p>
                </div>

                <div className="project">
                    <a href="https://www.figma.com/design/insdbFG8IwkU48vP2f1JyZ/customer-management?node-id=4-4&t=tyLcuWkEzpKQ8PAs-0" target="_blank" rel="noreferrer">
                        <img src={clean} className="zoom" alt="Craigslist website thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/design/insdbFG8IwkU48vP2f1JyZ/customer-management?node-id=4-4&t=tyLcuWkEzpKQ8PAs-0" target="_blank" rel="noreferrer">
                        <h2>“Ceylon Green” Cleaning Management System Website</h2>
                    </a>
                    <p>“Ceylon Green” Cleaning Management System Website UI/UX Design (University Group Project)</p>

                </div>

                <div className="project">
                    <a href="https://www.figma.com/design/LocLp7TD56pfYAVFbJIsoR/Police-Redesign?t=FUbTjrXULTxsM6kx-0" target="_blank" rel="noreferrer">
                        <img src={police} className="zoom" alt="Police website thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/design/LocLp7TD56pfYAVFbJIsoR/Police-Redesign?t=FUbTjrXULTxsM6kx-0" target="_blank" rel="noreferrer">
                        <h2>Police website</h2>
                    </a>
                    <p>Police Website Recreated UI/UX Design </p>
                </div>
            </div>
        </div>
    );
}

export default Project;
