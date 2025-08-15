import React, { useEffect, useState } from 'react'
import logo from '../photos/logo.png'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RxCross1 } from "react-icons/rx";

import zIndex from '@mui/material/styles/zIndex';
gsap.registerPlugin(ScrollTrigger)
export default function Navbar() {
    useEffect(() => {
        gsap.fromTo('.slide',
            {
                x: 50,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: ".slide",
                    toggleActions: "play none none none",
                    scroller: "body",
                    start: "top 120%",
                    // end: "bottom 60%",
                    // markers: true
                },
                x: 0,
                opacity: 1,
                duration: 1,
            })
    })
    const [ON, setON] = useState(false)
    const sidebarContent = (
        <div
            className="flex flex-col p-4 bg-black/80 text-white h-full"
            style={{
                width: "200px",
            }}
        >
            <button
                className="p-2 text-center mb-4 self-end"
                onClick={() => setON(false)}
            >
                <RxCross1 />
            </button>

            <nav className="flex flex-col gap-4">
                <Link to="#about" className="hover:text-gray-400 no-underline">
                    About me
                </Link>
                <Link to="#experience" className="hover:text-gray-400 no-underline">
                    Experience
                </Link>
                <Link to="#skills" className="hover:text-gray-400 no-underline">
                    Skill section
                </Link>
                <Link to="#projects" className="hover:text-gray-400 no-underline">
                    Projects
                </Link>
                <Link to="#contact" className="hover:text-gray-400 no-underline">
                    Contact
                </Link>
            </nav>
        </div>
    );

    return (
        <div className='container-fluid p-0 py-lg-3 py-md-2 py-sm-1 py-0 navcn  sm:w-[90%] w-full' style={{ zIndex: "9" }}>
            <div className="flex flex-row navrow w-full  text-white m-0   place-content-between align-items-center ">
                <div className="col-auto p-0 m-0 mx-md-0 md:ms-5 ms-0 " >
                    <h1 className='my-auto logo sm:ms-0 ms-4' style={{ fontSize: "50px" }}>dineshyadav</h1>
                </div>
                <div className="lg:w-3/5 md:w-8/12 w-full  bg  d-md-inline d-none md:m-0 -mt-4  as">
                    <ul className='d-flex  flex-row  md:place-content-between place-content-between w-full align-items-center p-0 m-0 '>
                        <li className='d-inline pb-2 list-style-none p-0 home mt-2 slide'>
                            <a href='/' className='fs-6 text-decoration-none m-0' style={{ color: '#4E9CD5' }}>HOME</a>
                        </li>
                        <li className='d-inline mt-2 pb-2 list-style-none p-0 slide'>
                            <a href='#about' className='fs-6 text-decoration-none text-white  m-0' >ABOUT ME</a>
                        </li>

                        <li className='d-inline  mt-2 pb-2 list-style-none p-0 slide'>
                            <a href='#skills' className='fs-6 text-decoration-none text-white  m-0' >SKILLS</a>
                        </li>
                        <li className='d-inline  mt-2 pb-2 list-style-none p-0 slide' >
                            <a href='#experience' className='fs-6 text-decoration-none text-white  m-0'  >EXPERIENCE</a>
                        </li>
                        <li className='d-inline  list-style-none p-0 slide'>
                            <a href='#contact' className='py-md-2 py-1 px-md-4 px-2 fs-6 rounded-1 text-decoration-none contact text-white'>CONTACT</a>
                        </li>
                    </ul>
                </div>



                <div className="col-sm-2 col-3 text-end pe-3  d-md-none d-inline p-0 fs-3 menubar position-relative mx-md-0 mx-sm-3 mx-4 ">
                    <button className='m-0 p-0 w-auto  text-white bg bg-transparent' style={{ zIndex: "10" }} onClick={() => setON(!ON)}>|||</button>
                    {ON && <div className="bar position-fixed top-0 left-0 w-full h-[100vh] text-end opacity-100" style={{ zIndex: "10", background: "linear-gradient(to bottom left, black, transparent)" }}>
                        <button className='p-2 text-center me-3 mt-2' onClick={() => setON(false)}> <RxCross1 /></button>
                        <ul className='px-5  w-fit ms-auto ' onClick={() => setON(false)} style={{ textShadow: "2px 2px 3px #0ef", fontFamily: "cursive" }}>
                            <li className=' fs-1 list-style-none p-0 w-fit text-[#0ef]'>
                                <a href='#about' className='fs-5 text-decoration-none text-white  m-0' >ABOUT ME</a>
                            </li>
                            <li className=' fs-1 list-style-none p-0 w-fit'>
                                <a href='#skills' className='fs-5 text-decoration-none text-white  m-0' >SKILLS</a>
                            </li>
                            <li className=' fs-1 list-style-none p-0  w-fit'>
                                <a href='#experience' className='fs-5 text-decoration-none text-white  m-0' >EXPERIENCE</a>
                            </li>
                            <li className=' fs-1 list-style-none p-0  w-fit'>
                                <a href='#projects' className='fs-5 text-decoration-none text-white  m-0' >PROJECTS</a>
                            </li>
                            <li className=' fs-1 list-style-none p-0  w-fit'>
                                <a href='#contact' className='fs-5 rounded-1 text-decoration-none text-white'>CONTACT</a>
                            </li>
                        </ul>
                    </div>}


                </div>
            </div>

        </div >

    )
}
