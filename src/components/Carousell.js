import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousell = () => {
  return (
    <Carousel>
        <Carousel.Item interval={3000}>
            <div style={{backgroundColor: 'red', height: '600px', width: '600px'}}>
              this is my first item
            </div>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <div className='carousel-item'>
              <div className='carousel-img'>
                blank picture
              </div>
              
            </div>
            <Carousel.Caption>
            <div className='carousel-text'>
                <div className='carousel-title'>
                  Project 1
                </div>
                <div className='carousel-body'>
                  <p>
                    Summary: 
                  </p>
                  <p>
                    Demo:
                  </p>
                  <p>
                    Github repository:
                  </p>
                </div>
              </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <div className='carousel-item'>
              <div className='carousel-img'>
                blank picture
              </div>
              
            </div>
            <Carousel.Caption>
            <div className='carousel-text'>
                <div className='carousel-title'>
                  Project 1
                </div>
                <div className='carousel-body'>
                  <p>
                    Summary: 
                  </p>
                  <p>
                    Demo:
                  </p>
                  <p>
                    Github repository:
                  </p>
                </div>
              </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Carousell