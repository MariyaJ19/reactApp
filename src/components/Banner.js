
import './Banner.css'
import Noodle from './Noodle.png'



const Banner = () => (
  <header>
  <div className='header'>
  
    <div className='main'>
      <h1><b>Food2Go</b></h1>
      <p>Making Food collection easier</p>
      
    </div>
   
  </div>
  <img className='header-image' src={Noodle} alt='Noodles' />
</header>

);
  export default Banner;