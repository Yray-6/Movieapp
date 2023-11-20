import { Carousel } from "antd";
import image2 from './assets/spidy.jpg';
import image3 from './assets/car.jpg';
import image4 from './assets/iron.jpg';
import image5 from './assets/sky.jpg';
const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  width:'100%',
  paddingBottom:'20px',
};
const Carousels = () => (
  <Carousel effect="fade" autoplay>
    <div>
      
        <img
          src={image2}
          alt=""
          className="carouselimg"
          style={contentStyle}
        />
      
    </div>
    <div>
      <img
          src={image3}
          alt=""
          className="carouselimg"
          style={contentStyle}
        />
    
    </div>
    <div>
    
      <img
          src={image4}
          alt=""
          className="carouselimg"
          style={contentStyle}
        />
      
    </div>
    <div>
      <img
          src={image5}
          alt=""
          className="carouselimg"
          style={contentStyle}
        />
      
    </div>
  </Carousel>
);
export default Carousels;
