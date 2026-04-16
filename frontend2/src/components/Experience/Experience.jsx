import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ComputerIcon, Laptop, School, UndoIcon, WorkflowIcon } from "lucide-react"
import ExperienceBox from './ExperienceBox';
function Experience() {
    return (
        <div className="flex xl:w-10/12 lg:w-10/12 md:w-9/12 sm:w-10/12 w-11/12  mx-auto my-10" id='experience'>

            <VerticalTimeline>

                <ExperienceBox
                    title={"Software Development Engineer Intern"}
                    company={"AeroYantra"}
                    companyLink={"https://www.aeroyantra.com/"}
                    place={"on-site"}
                    description={"Currently working on geospatial and visualization systems, focusing on optimizing map rendering workflows and improving data fetching strategies. I develop interactive map-based tools using Cesium for real-time spatial calculations and build systems for handling complex geospatial data. I have also worked on designing multi-format overlay ingestion pipelines supporting formats like PDF, DXF, KML/KMZ, and IFC for seamless visualization. Additionally, I contribute to drone simulation features, aligning telemetry data with map interactions for spatial-temporal analysis."}
                    date={"Dec 2025 - Present"}
                    Icon={<Laptop />}
                />
                <ExperienceBox
                    title={"Software Development Engineer Intern"}
                    company={"AeroYantra"}
                    companyLink={"https://www.aeroyantra.com/"}
                    place={"remote"}
                    description={"So far, I have worked on implementing secure authentication flows like OTP, magic-link, and password reset. I built a user dashboard to display connected sites, survey history, and data usage. I also developed the user profile section and implemented site sharing functionality. Additionally, I optimized a 3D measurement tool in Three.js using custom algorithms with linked lists and vectors."}
                    date={"JUNE 2025 - Nov 2025"}
                    Icon={<Laptop />}

                />
                <ExperienceBox
                    title={"Full Stack developer Intern"}
                    company={"SapmenC."}
                    companyLink={"https://sapmenc.com/in"}
                    place={"remote"}
                    description={"At SapmenC, I implemented a full-stack authentication module including multi-step signup, OTP and email verification, password reset functionality, and JWT-based session management using React, Node.js, MongoDB, and Zustand. I also developed a real-time chat system between brand and influencer users using Socket.io, with features like sent/delivered/read status, pagination, AI chatbot toggle, and sync handling on page refresh. Additionally, I built a project management tool offering List, Kanban, and Calendar views using Next.js, Prisma, and React Query, along with a responsive and server-rendered front end."}
                    date={"FEB 2025 - AUGUST-2025"}
                    Icon={<Laptop />}
                />
                <ExperienceBox
                    title={"Bachelor of Technology - Computer Science"}
                    company={"Indian Institute of Informatin Tecnology Vadodara International Campus Diu"}
                    companyLink={"http://diu.iiitvadodara.ac.in/"}
                    place={"Diu, India"}
                    description={"I'm currently pursuing a Bachelor of Technology in Computer Science and Engineering at IIIT Vadodara International Campus Diu, with a GPA of 7.50. My studies have covered key subjects including Data Structures, Algorithms, Operating Systems, Computer Networks, DBMS, and Machine Learning. In addition, I’ve solved over 800 problems on LeetCode, with 3300+ submissions over the past year, which has strengthened my grasp of DSA concepts through regular practice."}
                    date={"Nov 2022 - May 2026"}
                    Icon={<School />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default Experience
