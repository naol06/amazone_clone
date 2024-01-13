import React from 'react'
import { Carousel} from 'react-bootstrap';
import "./Home.css"
import Product from './Product';
function Home() {
  return (
    <div>
      <div className='home_conainer'>
     <Carousel className="home_carusel img-fade ">
      <Carousel.Item >
        <img
          className=" d-block w-100"
          src="https://m.media-amazon.com/images/I/71NqG9bBp7L._SX3000_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className='home_row'>
      <Product
      id="123123123"
      title="You can create a product component in React with the following structure:"
      price={11.96}
      rating={5}
      image="https://m.media-amazon.com/images/I/61H2+izHRgL._AC_SY400_.jpg"
      />
     <Product
      id="123123123"
      title="Shop activity trackers and smartwatches"
      price={10.96}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
      />
    </div>
     <div className='home_row'>
     <Product
      id="123123123"
      title="Shop activity trackers "
      price={315.99}
      rating={4}
      image="https://m.media-amazon.com/images/I/718zEa-9sWL._AC_UY327_FMwebp_QL65_.jpg"
      />
   <Product
      id="123123123"
      title="Shop activity trackers "
      price={529.91}
      rating={6}
      image="https://m.media-amazon.com/images/I/715ZpW-OIXL._AC_UY327_FMwebp_QL65_.jpg"
      />
     <Product
      id="123123123"
      title=" Low Heel Chelsea Fashion "
      price={529.91}
      rating={6}
      image="https://m.media-amazon.com/images/I/81Ar63YfnSL._AC_UL480_FMwebp_QL65_.jpg"
      />
    </div>
     <div className='home_row'>
     <Product
      id="123123123"
      title=" VejiA Ergonomic Gaming Chair with Footrest, Comfortable "
      price={529.91}
      rating={6}
      image=" https://m.media-amazon.com/images/I/61MJnSxb5gL._AC_UL480_FMwebp_QL65_.jpg"
      />
     
    </div>
  
      </div>
    </div>
  )
}

export default Home