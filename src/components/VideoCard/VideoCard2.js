import React from 'react'
import "./VideoCard2.css";
import yoga from "../../assests/video/yoga.mp4";

const VideoCard2 = (props) => {
  return (
    <>
    <div className='v-card-rights'>
        <div className='v-card-right-right'>
            <h1>{props.text}</h1>
            <p>{props.content}</p>
        </div>
        <div className='v-card-left-right'>
            <div className='v-box-right'>
                <video src={props.video} autoPlay loop muted/>
                <div className='text-right'>
                    <div className='top-right'>
                      {props.top}
                    </div>
                    <div className='btm-right'>
                       {props.btm}
                    </div>
                </div>
               
               <div className='button1'>
                        <button>read more <i class="fa-solid fa-chevron-right"></i></button>
               </div>
                
        
            </div>
        </div>
    </div>
    </>
  )
}

export default VideoCard2