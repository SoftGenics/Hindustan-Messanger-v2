import React from 'react'
import "./video.css"


export default function Video() {
    return (
        <div>
        <div className="mt-4">
            
            <div className="d-flex justify-content-around">
            <iframe className="ytube-video" src="https://www.youtube.com/embed/odOpuLXb2tw">
           </iframe>
            <iframe  className="ytube-video" src="https://www.youtube.com/embed/9Tdg4vp_aMQ">
           </iframe>
         <iframe className="ytube-video" src="https://www.youtube.com/embed/jvBfgPjtWDo">
        </iframe>
        </div>

            </div>
            </div>
    )
}
