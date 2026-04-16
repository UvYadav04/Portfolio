import React, { useEffect, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const data = [
    // 🔥 GenAI / AI (Primary Focus)
    { name: "LLMs", height: 92 },
    { name: "RAG", height: 92 },
    { name: "LangGraph", height: 90 },
    { name: "LangChain", height: 88 },
    { name: "Agentic AI", height: 90 },
    { name: "Prompt Engineering", height: 88 },
    { name: "LoRA / QLoRA", height: 84 },
    { name: "Vector Databases", height: 88 },
    { name: "Qdrant", height: 88 },

    // 🧠 Deep Learning
    { name: "Transformers", height: 86 },
    { name: "BERT / GPT", height: 85 },
    { name: "Attention Mechanism", height: 84 },
    { name: "Neural Networks", height: 82 },
    { name: "CNN / U-Net", height: 80 },

    // 💻 Development (Strong + Relevant)
    { name: "React", height: 95 },
    { name: "Next.js", height: 90 },
    { name: "TypeScript", height: 90 },
    { name: "JavaScript", height: 92 },
    { name: "FastAPI", height: 90 },
    { name: "Node.js", height: 88 },
    { name: "REST APIs", height: 90 },
    { name: "MongoDB", height: 88 },
    { name: "Redis", height: 85 },
    { name: "Docker", height: 80 },
    { name: "AWS", height: 82 }
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
        <div className='skillpage container py-4 mt-4 px-3 '>
            {/* <h1 className='text-white mb-4 px-md-5 px-0 text-2xl underline mx-auto' >Tech Skills</h1> */}
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