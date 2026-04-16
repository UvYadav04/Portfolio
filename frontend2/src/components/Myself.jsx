import React from 'react'
import book from '../photos/book.png'
import resume from '../data/MyResume.pdf'

export default function Myself() {

    return (
        <div className='mypage container-fluid p-0 py-2 position-relative bg-transparent px-sm-0 px-3'>
            <div className="myrow row w-100 mx-auto justify-content-between align-items-center " id='about'>

                <div className="col-xl-3 col-3 p-0 d-lg-inline d-none mx-auto">
                    <img src={book} className='w-100 ' alt="" />
                </div>

                <div className="col-xxl-7 col-xl-8 col-lg-8 col-12  left text-white opacity-75  px-0 flex flex-col place-content-start place-items-start ">
                    <h2 className='m-0 fs-sm-2 fs-2'>About me</h2>
                    {/* XL screens */}
                    <p className="d-none d-xxl-block text-base break-all text-slate-400" style={{ lineHeight: "19px" }}>
                        {`Hey there! I'm a Full-Stack AI Developer specializing in building intelligent systems using LLMs, RAG pipelines, LangChain, LangGraph, and agent-based architectures with vector databases. I develop scalable, high-performance applications by combining strong backend engineering with modern frontend frameworks. With a solid foundation in data structures, algorithms, and system design, I focus on building efficient, reliable, and well-architected systems. My work emphasizes clean, maintainable code, optimized data flows, and seamless integration of AI capabilities into real-world applications.`}
                    </p>

                    <p className="d-xxl-none d-none d-xl-block text-base break-all text-slate-400" style={{ lineHeight: "19px" }}>
                        {`Hey there! I'm a Full-Stack AI Developer working with LLMs, RAG, LangChain, LangGraph, and vector databases to build intelligent systems. I develop scalable applications using React, TypeScript, Node.js, and FastAPI, with a strong focus on system design, efficient architectures, and clean code.`}
                    </p>

                    <p className="d-none d-lg-block d-xl-none text-base break-all text-slate-400" style={{ lineHeight: "19px" }}>
                        {`Hi! I'm a Full-Stack AI Developer experienced in building applications using LLMs, RAG pipelines, and modern web technologies. I focus on scalable backend systems, clean frontend interfaces, and efficient system design to create reliable and maintainable solutions.`}
                    </p>

                    <p className="d-md-block d-lg-none d-none text-base break-all text-slate-400" style={{ lineHeight: "20px" }}>
                        {`Hey! I'm a Full-Stack AI Developer building scalable applications and AI-powered systems using LLMs, RAG, and modern web technologies. I focus on clean architecture, efficient performance, and real-world problem solving.`}
                    </p>

                    <p className="d-none d-sm-block d-md-none text-base break-all text-slate-400" style={{ lineHeight: "19px" }}>
                        {`Full-Stack AI Developer working with LLMs, RAG, and modern web stacks to build scalable and efficient applications with clean architecture.`}
                    </p>

                    <p className="d-sm-none d-lg-none d-xl-none text-base break-all text-slate-400" style={{ lineHeight: "19px" }}>
                        {`Full-Stack AI Developer building scalable apps and AI systems using LLMs and modern technologies.`}
                    </p>

                    <hr />


                    <div className="navbutons flex gap-1 mt-2">
                        <a href='/' onClick={() => window.open(resume)} className=' px-sm-3 px-2 py-sm-1 py-1 fs-sm-4 fs-6 me-2 rounded-2 text-decoration-none buttons text-white'>Resume</a>
                        <a href='#projects' className='px-sm-3 px-2 py-sm-1 py-1 fs-sm-4 fs-6 rounded-2 text-decoration-none buttons text-white'>Projects</a>
                    </div>
                </div>


                <div className="svgs position-absolute top-0">
                    <svg height="700" className=' w-100' viewBox="0 0">
                        {/* <path className='d-md-inline d-none' stroke='orange' fill='orange' d="M0,0 C150,500 400,200 600,735 H0 V0"></path> */}

                        <path className='d-lg-block d-none' opacity={0.5} d="M1300,0 L1300,120" stroke='white' />
                        <path className='d-lg-block d-none' opacity={0.5} d="M1200,0 L1200,220" stroke='white' />
                        <path className='d-lg-block d-none' opacity={0.5} d="M1100,0 L1100,100" stroke='white' />
                        <path className='d-lg-block d-none' opacity={0.5} d="M1000,0 L1000,180" stroke='white' />
                        <path className='d-lg-block d-none' opacity={0.5} d="M900,0 L900,240" stroke='white' />
                        <path className='d-lg-block d-none' opacity={0.5} d="M800,0 L800,100" stroke='white' />

                        <circle className='circles d-lg-block d-none ' cx={1300} cy={150} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={1200} cy={250} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={1100} cy={130} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={1000} cy={210} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={900} cy={270} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={800} cy={130} r={30} fill='black' stroke='00ffee'></circle>

                        <circle className='circles d-lg-block d-none ' cx={1300} cy={150} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={1100} cy={130} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={800} cy={130} r={30} fill='black' stroke='00ffee'></circle>

                        <path opacity={0.5} d="M410,0 L410,100" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <path opacity={0.5} d="M500,0 L500,210" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <path opacity={0.5} d="M590,0 L590,120" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <path opacity={0.5} d="M680,0 L680,220" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <path opacity={0.5} d="M770,0 L770,140" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <path opacity={0.5} d="M850,0 L850,245" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <circle className='circles d-lg-none d-sm-block d-none' cx={410} cy={130} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-none d-sm-block d-none' cx={500} cy={240} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-none d-sm-block d-none' cx={590} cy={150} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-none d-sm-block d-none' cx={680} cy={250} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-none d-sm-block d-none' cx={770} cy={170} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-none d-sm-block d-none' cx={850} cy={275} r={30} fill='black' stroke='00ffee'></circle>

                        <path opacity={0.5} d="M540,0 L540,185" stroke='white' className='d-sm-none' />
                        <path opacity={0.5} d="M470,0 L470,105" stroke='white' className='d-sm-none' />
                        <path opacity={0.5} d="M400,0 L400,215" stroke='white' className='d-sm-none' />
                        <path opacity={0.5} d="M320,0 L320,125" stroke='white' className='d-sm-none' />
                        <circle className='circles d-sm-none' cx={540} cy={210} r={25} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-sm-none' cx={470} cy={130} r={25} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-sm-none' cx={400} cy={240} r={25} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-sm-none' cx={320} cy={150} r={25} fill='black' stroke='00ffee'></circle>

                    </svg>
                </div>
            </div>
        </div>
    )
}
