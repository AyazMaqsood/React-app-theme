import React from 'react'

import Img1 from "../assests/download.jpg";
import Img2 from "../assests/download.jpg";
import Img3 from "../assests/download.jpg";
import Img4 from "../assests/download.jpg";
import Img5 from "../assests/download.jpg";
import Img6 from "../assests/download.jpg";
import Img7 from "../assests/download.jpg";
import Img8 from "../assests/download.jpg";
import Img9 from "../assests/download.jpg";

const data = [
  {
    Img: Img1,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
  {
    Img: Img2,
    desc: "lorem ipsum dolor sit amet consectetur ",
  },

  {
    Img: Img3,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
  {
    Img: Img4,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
  {
    Img: Img5,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
  {
    Img: Img6,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
  {
    Img: Img7,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
  {
    Img: Img8,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
  {
    Img: Img9,
    desc: "lorem ipsum dolor sit amet consectetur",
  },
];
function Entertainment() {
  return (
     <div className="container mt-5 mb-4">
        <h2 className="mb-3">Entertainment </h2>
        <hr style={{ height: "6px", background:"black", border: "none" }} />
          <div className="row">
            <div className="col-md-4 d-flex flex-column ">
               <img 
                 src={Img1} 
                 alt="entertainment main" 
                   className="img mb-3 pt-2" 
               style={{width:"100%", height:"auto", borderRadius:"10px"}} 
        />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim
                inventore rerum, soluta blanditiis quidem mollitia, veniam fuga
                illum odit
              </p>
            </div>
          <div className="col-md-8 ps-5 ">
          <div className="row g-4">
            {data.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card h-100 flex-row">
                  <img src={item.Img} alt=""  style={{width:"100px",height:"80px",objectFit:"cover",borderRadius:"10px"}} />
                  <p>{item.desc}</p>
                </div>
              </div>
            ))} 
          </div>
        </div>
          </div>
        </div>
  )
}

export default Entertainment