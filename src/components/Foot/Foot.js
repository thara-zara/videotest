import React from 'react';
import "./Foot.css"
import logo from "../../assests/image/logo.png";

const Foot = () => {
  return (
    <div className='foot'>
        <div className='foot-top'>
            <input type="text" />
            <button>submit</button>
            <div className='top'>
                <div className='top-all'>
                    scrire
                </div>
                <div className='btm-all'>
                    all
                </div>
            </div>
        </div>
        <div className='copy'>
            <div className='social'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className='mid'>
                    terms and conditions are apply
            </div>
        </div>
    </div>
  )
}

export default Foot