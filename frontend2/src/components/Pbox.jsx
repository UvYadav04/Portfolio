import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LaunchIcon from '@mui/icons-material/Launch';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Pbox({ name, description, images, pending, link }) {
    const [classname, setclass] = useState("layer position-absolute pt-5")
    const handlehover = () => {
        setclass("layer position-absolute top-0 w-100 h-100 layershow")
    }
    const handleout = () => {
        setclass("layer position-absolute top-0 w-100 h-100 layerhide")
    }

    const getimage = (item) => {
        return require(`../photos/${item}.png`)
    }
    return (
        <>
            <div className='col-lg-4 col-md-6 col-sm-8 col-11  p-xl-5 p-lg-4 p-0 text-white '>
                <div className="p-0 m-0 w-100 innerone position-relative " onMouseEnter={() => handlehover()} onMouseLeave={() => handleout()} >
                    <Carousel showThumbs={false} autoPlay={true} showStatus={false} interval={3000} transitionTime={2000} infiniteLoop={true} showIndicators={false} >
                        {images.map((item) => {
                            return (
                                <div className='w-100'>
                                    <img src={getimage(item)} className='w-100 rounded-0' alt="" />
                                </div>
                            )
                        })}
                    </Carousel>
                    <div className={classname}>
                        <h3 className='text-center mt-3 p-0'>{name} <span className={pending ? "d-inline fs-4" : "d-none"}>(progress)</span> <LaunchIcon className={pending ? "d-none" : 'mb-2'} sx={{ fontSize: 30 }} /> </h3>
                        <p className='text-center mt-2 px-2'>{description}</p>
                    </div>
                </div >


            </div >

        </>
    )
}
