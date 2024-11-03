import React from 'react'
import salad from '../assets/icons_assets/restauranfood.jpg'
import Logo from '../assets/icons_assets/Logo.svg'
import { Row } from 'react-bootstrap'
export default function HeroSection() {
  return (
    <div className='bg-495E57 py-3 d-flex '>
      <Row className='w-100'>
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-center">
          <h1 className='f-F4CE14'>Little Lemon</h1>
        </div>
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-center">
          <img src={salad} alt="Little Lemon Logo" width={"15%"} />
        </div>
      </Row>

    </div>
  )
}
