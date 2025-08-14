import { Laptop } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

function ExperienceBox({ title, company, companyLink, place, description, date, Icon }) {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ backgroundColor: "black", color: '#fff', boxShadow: "2px 2px 6px #0ef" }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date={date}
            iconStyle={{ background: "black", color: '#fff' }}
            icon={Icon}
        >
            <h2 className="vertical-timeline-element-title text-slate-500" style={{ color: "rgb(100 116 139)" }}>{title}</h2>
            <h3 className="vertical-timeline-element-subtitle ">{companyLink ? <Link className='text-[#0ef]' to={companyLink}>{company}</Link> : company}- {place}</h3>
            <p className='opacity-60 max-h-28 overflow-y-scroll' style={{ lineHeight: "17px", fontWeight: "400", fontSize: "14px", scrollbarWidth: "none" }}>{description} </p>
        </VerticalTimelineElement>
    )
}

export default ExperienceBox
