import img1 from './photo-1.jpeg'
import photoMd1 from './photo-md-1.jpg'

const Home = () => {
  return (
    <div className="relative top-[8vh] md:top-[10vh] h-[70vh] md:h-[]">
      <img src={img1} alt="" className='md:hidden w-[100%] absolute top-0 brightness-80'/>
      <img src={photoMd1} alt="" className='hidden md:block lg:hidden brightness-80'/>
    </div>
  )
}

export default Home
