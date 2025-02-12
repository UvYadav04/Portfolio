import React, { useState } from "react";
import "./card.css"; // Make sure to create and import the corresponding CSS file
import Projects from "../../data/Projects";
import { Link } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
const Card = ({ code, name, image, text, techstack, link, git, demo, setdemo, description1, description2, hide }) => {

    const getImage = (image) => {
        return require(`../../photos/logos/${image}.png`)
    }
    const getVideo = (video) => {
        return require(`../../videos/${video}.mp4`)
    }
    return (
        <div className={`${code >= 2 && hide ? "tumor" : "show"} card`}>
            <div className="imgBx" data-text={text}>
                <img src={getImage(image)} alt={text} />
            </div>
            <div className="content">
                <p className="name"><Link to={link} className="link">{name}</Link></p>
                <p className="link">
                    <Link to={git} className="link"><i>github</i></Link>
                    {demo ? <Link onClick={() => setdemo(getVideo(name))} className="link"><i>demo</i></Link> : null}
                </p>
                <p className="stack">{techstack}</p>
                <p className="about">{description1}</p>
            </div>


        </div>
    );
};

const ProjectsCard = () => {
    const [hide, sethide] = useState(1)
    const [demovideo, setdemo] = useState(null)
    return (
        <div className="container2 p-0">
            <h1>Tech Projects</h1>
            {Projects.map((card, index) => (
                <Card
                    key={index}
                    code={index}
                    name={card.name}
                    image={card.name}
                    description1={card.description1}
                    description2={card.description2}
                    techstack={card.techstack}
                    git={card.git}
                    demo={card.demo}
                    link={card.link}
                    hide={hide}
                    setdemo={setdemo}
                />
            ))}

            {
                demovideo ? <div className="imageviewer">
                    <button onClick={() => setdemo(null)} ><ImCancelCircle size={20} /></button>
                    <video src={demovideo} autoPlay={true} controls={true} />
                </div> : null
            }

            <div className="show w-100 ">
                <button className="showbutton" onClick={() => sethide(!hide)} >{hide ? "show all" : "hide"}</button>
            </div>
        </div>
    );
};

export default ProjectsCard;
