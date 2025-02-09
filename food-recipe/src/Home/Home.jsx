import SplitText from '../Components/SplitText'
import photo2xl from './photo-2xl.webp'
import img1 from './photo-1.jpeg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


const doYouknowUrl = "https://dummyjson.com/c/91e1-e265-45d4-b879";
const recipeUrl = "https://dummyjson.com/recipes";

const Home = () => {

  const [tips, setTips] = useState([]);
  const [recipes, SetRecipes] = useState([]);
  useEffect(() => {
    axios.get(doYouknowUrl)
      .then((response) => { setTips(response.data) })
      .catch((error) => {
        console.error("unable to fetch", error)
      });

  }, [])

  useEffect(() => {
    axios.get(recipeUrl)
      .then((response) => {
        SetRecipes(response.data.recipes.slice(0, 6));
      })
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

        <div id="pageThree" className='h-[100%] flex flex-col items-center gap-7 mb-[5%]'>
          <h1 className='heading p-5 text-4xl text-center md:text-5xl font-bold md:text-center'>Popular Recipes You Can't Miss</h1>
          <h2 className='subheading my-2 text-center w-[90%] text-xl text-gray-500'>From comfort food classics to exotic flavors, our featured recipes are sure to impress.</h2>
          <div className="swiper-outer w-[80%] flex justify-center lg:w-[70%] 2xl:w-[80%] m-auto">
            <div className="swipe m-auto w-[100%]">
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
                    spaceBetween: 20,
                  },
                }}
              >
                {recipes.map((recipe) => {
                  return (
                    <SwiperSlide className="" key={recipe.id}>
                      <div className="h-[450px] max-lg:h-[350px] lg:h-[350px] 2xl:h-[380px] 2xl:w-[70%] lg:w-[90%] w-[80%] border-1 border-gray-300 rounded-xl justify-between flex flex-col p-4 m-auto">
                        <div className="img w-[100%] h-[50%] overflow-hidden rounded-xl">
                          <img src={recipe.image} alt="" className='h-[100%] w-[100%]' />
                        </div>
                        <div id="title">
                          <p className='text-xl font-bold'>{recipe.name}</p>
                          <p className='description text-gray-600 text-md'>{recipe.tags[0]}, {recipe.tags[1]}</p>
                        </div>
                        <div id="cardbutton">
                          <Link to="/Recipes"><button className='p-2 bg-transparent border-1 border-gray-400 hover:text-white hover:border-transparent w-[100%] hover:cursor-pointer touch-action: manipulation touch-action:bg-orange-400 hover:bg-orange-400 font-bold rounded-lg'>See full details</button></Link>
                          
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}


              </Swiper>
            </div>
          </div>
        </div>

      </div>
      <div className="footer h-[100%] bg-gray-950 text-white border-2 flex flex-col items-center pt-[6%] gap-5">
        <div className="heading text-4xl font-bold">MyKitchen</div>
        <div className="subheading w-[90%] pb-5 text-center">From quick and easy meals to gourmeat delights, we have something for every taste and occasion.</div>
        <hr className='w-[80%] text-gray-600'/>
        <div className="subheading text-sm w-[90%] footer-navigation flex justify-center gap-4 md:gap-5 md:flex md:justify-center md:text-xl">
          <Link>About Us</Link>
          <Link>Recipes</Link>
          <Link>Contest</Link>
          <Link>Blogs</Link>
        </div>
        <hr className='w-[100%] text-gray-600'/>
        <div className='flex justify-between h-[100%] w-[100%] px-5'>
          <p>Copyright 2025</p>
          <div className=' flex gap-3 md:gap-4'>
            <button><box-icon type='logo' color='white' name='facebook'></box-icon></button>
            <button><box-icon name='instagram' color='white' type='logo' ></box-icon></button>
            <button><box-icon name='twitter' color='white' type='logo' ></box-icon></button>
            <button><box-icon name='youtube' color='white' type='logo' ></box-icon></button>
          </div>
        </div>
      </div>

    </>

  )
}

export default Home
