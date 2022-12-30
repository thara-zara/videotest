import React from 'react'
import "./Home.css"
import Nav from '../Nav/Nav'

import watch from "../../assests/video/watch.mp4";
import train8 from "../../assests/video/train8.mp4";
import man from "../../assests/video/man.mp4";
import bie from "../../assests/video/bie.mp4";
import food from "../../assests/video/food.mp4";
import yoga from "../../assests/video/yoga.mp4";
import phone from "../../assests/video/phone.mp4";
import VideoCard from '../VideoCard/VideoCard';
import VideoCard2 from '../VideoCard/VideoCard2';
import Foot from '../Foot/Foot';

const Home = () => {
  return (
    <div className='home'>
        <div classname="navigation">
            <Nav/>
        </div>
        <div className='content'>

            <VideoCard
              video={man}
              top="digital"
              btm="agency"
              text="digital agency intraduce"
              content="There are many variations of passages of have suffered
              alteration in some, by injected humour, or randomised ."
           
            />
            <VideoCard2
              video={phone}
              top="trend"
              btm="brand"
              text="apple watch ui kit for free download"
              content="There are many variations of passages of have suffered
              alteration in some, by injected humour, or randomised ."
             
            />
            <VideoCard
                video={train8}
                top="crossfit"
                btm="train"
                text="girl on sand beach training hard crossfit"
               
                content="There are many variations of passages of have suffered
                alteration in some, by injected humour, or randomised ."
            />
            <VideoCard2
              video={watch}
              top="apple"
              btm="ui kit"
              text="apple watch ui kit for free download"
              content="There are many variations of passages of have suffered
              alteration in some, by injected humour, or randomised ."
             
            />
            <VideoCard
                video={yoga}
                top="realx"
                btm="yoga"
                text="GIRL DOING YOGA ON THE SHORE OF THE OCEAN ON THE BEACH"
                
                content="There are many variations of passages of have suffered
                alteration in some, by injected humour, or randomised ."
            />
            <VideoCard2
              video={bie}
              top="bike"
              btm="offroad"
              text="off road motorbike ride in sandy beach"
              content="There are many variations of passages of have suffered
              alteration in some, by injected humour, or randomised ."
             
            />
          <VideoCard
                video={food}
                top="fajitas"
                btm="food"
                text="fajitas and nachos asian food"
                
                content="There are many variations of passages of have suffered
                alteration in some, by injected humour, or randomised ."
            />
            {/* <VideoBox
            video={phone}
            heading="GIRL DOING YOGA ON THE SHORE OF THE OCEAN ON THE BEACH"
            content="There are many variations of passages of have suffered
             alteration in some, by injected humour, or randomised ."
            top="RELAX"
            btm="YOGA"
            top_clr="green"
            btm_clr="green"
            btn_clr="green"
            />
            <VideoBox
            video={watch}
            heading="APPLE WATCH UI KIT FOR FREE DOWNLOAD"
            content="There are many variations of passages of have suffered
             alteration in some, by injected humour, or randomised ."
            top="TREND"
            btm="BRAND"
            color1=""
            color2=""
            color3=""
            />
            <VideoBox
            video={train8}
            heading="APPLE WATCH UI KIT FOR FREE DOWNLOAD"
            content="There are many variations of passages of have suffered
             alteration in some, by injected humour, or randomised ."
            top="CROSSFIT"
            btm="TRAIN"
            top_clr="brown"
            btm_clr="brown"
            btn_clr="brown"
            />
            <VideoBox
            video={man}
            heading="APPLE WATCH UI KIT FOR FREE DOWNLOAD"
            content="There are many variations of passages of have suffered
             alteration in some, by injected humour, or randomised ."
            top="DIGITAL"
            btm="AGENCY"
            color1=""
            color2=""
            color3=""
            />
              <VideoBox
            video={bie}
            heading="GIRL DOING YOGA ON THE SHORE OF THE OCEAN ON THE BEACH"
            content="There are many variations of passages of have suffered
             alteration in some, by injected humour, or randomised ."
            top="RELAX"
            btm="YOGA"
            color1=""
            color2=""
            color3=""
            />
            <VideoBox
            heading="GIRL DOING YOGA ON THE SHORE OF THE OCEAN ON THE BEACH"
            content="There are many variations of passages of have suffered
             alteration in some, by injected humour, or randomised ."
            top="RELAX"
            btm="YOGA"
            top_clr="green"
            btm_clr="green"
            btn_clr="green"
            />
              <VideoBox
            video={food}
            heading="GIRL DOING YOGA ON THE SHORE OF THE OCEAN ON THE BEACH"
            content="There are many variations of passages of have suffered
             alteration in some, by injected humour, or randomised ."
            top="RELAX"
            btm="YOGA"
            color1=""
            color2=""
            color3=""
            /> */}
             

             <Foot/>
        </div>
    </div>
  )
}

export default Home