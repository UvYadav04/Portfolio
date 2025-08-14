import React, { useEffect, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const data = [
    { name: "Next.js", height: 90 },
    { name: "React", height: 95 },
    { name: "Redux", height: 85 },
    { name: "Zustand", height: 80 },
    { name: "JavaScript", height: 92 },
    { name: "TypeScript", height: 88 },
    { name: "C", height: 70 },
    { name: "C++", height: 72 },
    { name: "Python", height: 75 },
    { name: "Node.js", height: 90 },
    { name: "Express.js", height: 88 },
    { name: "MongoDB", height: 90 },
    { name: "PostgreSQL", height: 80 },
    { name: "MySQL", height: 78 },
    { name: "Prisma", height: 80 },
    { name: "Mongoose", height: 82 },
    { name: "Tailwind CSS", height: 85 },
    { name: "Docker", height: 78 },
    { name: "Git/GitHub", height: 85 },
    { name: "Nginx", height: 75 },
    { name: "Software Architecture", height: 82 },
    { name: "System Design", height: 80 },
    { name: "Design Patterns", height: 80 }
];



export default function Skill() {

    useEffect(() => {
        gsap.fromTo('.skillpage',
            {
                y: 300,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: ".skillpage",
                    toggleActions: "play none none none",
                    start: "top 120%",
                    // end: "bottom 60%",
                    // markers: true

                },
                y: "0",
                opacity: 1,
                duration: 1,
            })
    })
    return (
        <div className='skillpage container py-4 mt-4 px-1'>
            <h1 className='text-white mb-4 px-md-5 px-0 text-2xl underline' >Tech Skills</h1>
            <div className="row mx-0  skillrow  flex-columns justify-content-md-start justify-content-between align-items-start px-md-0 px-sm-2 px-0" id='skills'>
                {
                    data.map((item) => {
                        return <div className="col-md-4 col-12 plots d-flex flex-column align-items-center px-0 " style={{ "height": "100%" }}>
                            <h6 className='text-white mb-1 text-start  d-block'>{item.name} </h6>
                            <div className="outer mb-md-4 mb-2   h-100  p-0  overflow-hidden  position-relative ">
                                {/* <img src={getimage(item.name)} className='w-75 mx-auto  mb-2' alt="" /> */}
                                <div className=' graph' style={{ "width": `${item.height}%` }}></div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div >
    )
}