import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore,{ Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import React from 'react';
import "../../components/specialistAd/Feedback.css"

import { AiTwotoneStar } from 'react-icons/ai';



// import 'swiper/css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

// Import Swiper React components
SwipeCore.use([Navigation,Pagination,Scrollbar,A11y,Autoplay]);//
// Import Swiper styles

const data=[
{
  "id":"1",
  "username":"Andrews",
  "Rate":"4.9",
  "testimonial":"ChennaiServiceClub do AC service professionally. My AC issue was resolved quickly. The price was very reasonable. I was charged 40% less than my usual budget. This is a great service.",
  "profilepic":"images.png"
},{
  "id":"2",
  "username":"John",
  "Rate":"4.6",
  "testimonial":"Recently, my AC wasn't functioning properly. I was disappointed with some other cheap AC services, So My friend suggested ChennaiServiceClub for AC repairs. After I contacted them they had fixed the AC issue in a short time. Quick, efficient, and affordable price.",
  "profilepic":"images.png"
},{
  "id":"3",
  "username":"Mohan",
  "Rate":"4.7",
  "testimonial":"Very Good Service. Experienced Technicians and Machine handling was good. Highly recommended AC Service Center in Chennai",
  "profilepic":"images.png"
},{
  "id":"4",
  "username":"Andrews",
  "Rate":"4.8",
  "testimonial":"Chennaiserviceclub examined my AC's problem last week. They informed me that their way of checking things would be different from others. Along with the problem I had mentioned, many more problems were fixed. Feel free to give them a try.",
  "profilepic":"images.png"
},{
  "id":"5",
  "username":"Prasad",
  "Rate":"4.8",
  "testimonial":"Excellent Service i ever seen",
  "profilepic":"images.png"
}
]

export function SwipeSlider() {

  return (   
    
   <Swiper slidesPerView={window.innerWidth>600 ? window.innerWidth>950? 3 : 2  : 1}
    spaceBetween={10}
    // loop={true}
    autoplay={{
        delay: 1000
    }}
   
    // onSlideChange={()=> console.log('')}
    // onSwiper ={swiper =>console.log(swiper)} 
    navigation
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }} 
    className="mySwiper" >
{data.map(user => (
  <SwiperSlide key={user.id} className="slider" >
    <div className="slide-content">
      <div >
        <img src={user.profilepic}  className="img-box" alt="user review avatar"/>
      
      <h3 className="positiveCardtitle">{user.username}<div style={{"padding":"0px","font-size":"20px","text-align":"center"}}>{user.Rate}<AiTwotoneStar style={{color:"green","font-size":"24px","vertical-align": "top"}}/> </div></h3>
      
      <p className="user-testimonial">
        "{user.testimonial}"

      </p>
      </div>
    </div>

    {/* <div>{user.testimonial}</div> */}
    </SwiperSlide>
))}

</Swiper>
  );
};

