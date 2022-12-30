import React from 'react'
import "./VideoCard.css"

import train8 from "../../assests/video/train8.mp4";
import yoga from "../../assests/video/yoga.mp4";
import phone from "../../assests/video/phone.mp4";


const VideoCard = (props) => {
  return (
    <>
    <div className='v-card'>
        <div className='v-card-left'>
            <div className='v-box'>
                <video src={props.video} autoPlay loop muted/>
                <div className='text'>
                    <div className='top'>
                      {props.top}
                    </div>
                    <div className='btm'>
                        {props.btm}
                    </div>
                </div>
               
             <div className='button2'>
                <button>read more <i class="fa-solid fa-chevron-right"></i> </button>
                </div> 

            </div>
        </div>
        <div className='v-card-right'>
            <h1>{props.text}</h1>
            <p>{props.content}</p>
        </div>
    </div>
    
    </>
  )
}

export default VideoCard