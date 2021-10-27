import './Hero.css'
import Navbar from './Navbar.js';


function FrontPic(props) {
    return (
  
        <div className="landing-page">
                <Navbar />
          <div className="landing-page-content">
            <h3>Welcome To Our Syudio!</h3>
            <h1>IT'S NICE TO MEET YOU</h1> 
            <button className="tell-me-more"></button>   
          </div>
        </div>
      
    );
  }

  export default FrontPic;