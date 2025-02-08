import SplitText from '../Components/SplitText'
import img1 from './photo-1.jpeg'
import photoMd1 from './photo-md-1.jpg'
import photoLg1 from './photo-lg-1.jpg'
import photo2xl from './photo-2xl.webp'
import axios from 'axios'
import { useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {

  const [tips, setTips] = useState([])

  const url = "https://dummyjson.com/c/91e1-e265-45d4-b879";

  useEffect(() => {
    axios.get(url)
      .then((response) => { setTips(response.data); console.log(tips) })
      .catch((error) => {
        console.error("unable to fetch", error)
      });

  }, [])





  return (

    <>
      <div className="home flex flex-col gap-10 h-[100%]" id='pageOne'>
        <div className="relative top-[8vh] md:top-[10vh] h-[70vh] lg:h-[100vh] flex justify-center items-center">
          <div className='h-[80%] absolute top-0 z-40 flex items-center justify-center'>
            <SplitText
              text="Welcome to MyKitchen"
              className="text-6xl 2xl:text-8xl font-bold text-white text-center h-fit"
              delay={200}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>

          <img src={img1} alt="" className='md:hidden w-[100%] absolute top-0 brightness-60' />
          <div className='h-[85%] w-[95%] mt-0 absolute top-0 hidden md:block overflow-hidden rounded-2xl'>
            <img src={photo2xl} alt="" className='w-[100%] lg:h-[100%] lg:aspect-video brightness-50' />
          </div>


        </div>
        <div id='pageTwo' className="w-[100%] h-[100%] py-5 px-3 lg:px-10 ">
          <h1 className='text-3xl md:text-6xl font-bold my-8 md:my-0 lg:my-5'>Do you Know?</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
            {tips.map((tip, index) => (
              <div key={index} className="cards w-[auto] rounded-2xl h-fit flex flex-col md:flex lg:flex-row">
                <img src={tip.image} alt={tip.title} className="w-full h-full object-cover rounded-2xl" />
                <div className="p-4 flex justify-center items-center">
                  <p className="text-gray-700">{tip.paragraph}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
        <div id="pageThree" className='h-[100vh] flex flex-col items-center gap-7'>
          <h1 className='heading p-5 text-4xl text-center md:text-5xl font-bold md:text-center'>Recipe Collection</h1>
          <h2 className='subheading my-2 text-center w-[90%] text-xl md:text-2xl text-gray-500'>From quick weeknight dinners to elaborate weekend projects, we have recipes to fit every lifestyle and taste</h2>
          <div className="swiper-outer w-[70%] m-auto mt-0">
            <div className="swipe m-auto">
              <Swiper
                breakpoints={{
                  // When the viewport is 390px or smaller
                  390: {
                    slidesPerView: 1, // Show 1 slide at a time
                    spaceBetween: 10, // Space between slides
                  },
                  // When the viewport is between 768px and 1023px
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // When the viewport is 1024px or larger
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide className="h-[100%]">
                  <div className="h-[45vh] md:h-[35vh] lg:h-[40vh] 2xl:h-[350px] 2xl:w-[80%]  lg:w-[90%] w-[100%] border-1 border-gray-400 rounded-xl justify-between flex flex-col p-4">
                    <div className="img w-[100%] h-[50%] border-1 overflow-hidden rounded-xl">
                      <img src={img1} alt="" className='h-[100%] w-[100%]' />
                    </div>
                    <div id="title">
                      <p className='text-xl font-bold'>Title</p>
                      <p className='description text-gray-600 text-md'>Description</p>
                    </div>
                    <div id="cardbutton">
                      <button className='p-2 bg-yellow-400 w-[100%] rounded-md'>See full details</button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

      </div>

    </>

  )
}

export default Home
