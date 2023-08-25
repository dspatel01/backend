import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <>
            <div className="sideBar" style={{width:"25%",height:"85vh",background:"blue",marginLeft:"10px"}}>
                <ul>
                    <li><Link to="/adminPanal/calender">Calender</Link></li>
                    <li><Link to="/adminPanal/dailyThousands">Daily Thoughts</Link></li>
                    <li><Link to="/adminPanal/imageGallery">Image Gallery</Link></li>
                    <li><Link to="/adminPanal/upcomingEvent">Upcomming Event</Link></li>
                    <li><Link to="/adminPanal/videoGallery">Video Gallery</Link></li>
                </ul>
            </div>
        </>
    )
}

export default SideBar