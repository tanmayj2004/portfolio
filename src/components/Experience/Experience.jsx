import React from "react";
import cpp from "../../assets/skills/cpp.png";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/Js.png";
import reactImg from "../../assets/skills/react.png";
import node from "../../assets/skills/node.png";
import mongodb from "../../assets/skills/mongodb.png";
import cloud from "../../assets/history/cloud.avif";
import google from "../../assets/history/google.png";
import electromob from "../../assets/history/Electromob";
import styles from "./Experience.module.css";

const skills = [
    { title: "C++", imageSrc: cpp },
    { title: "HTML", imageSrc: html },
    { title: "CSS", imageSrc: css },
    { title: "JavaScript", imageSrc: js },
    { title: "React", imageSrc: reactImg },
    { title: "Node", imageSrc: node },
    { title: "MongoDB", imageSrc: mongodb }
];
const history=[
    {
      "role": "Software Developer",
      "organisation": "Electromob Private Limited",
      "startDate": "May, 2025",
      "endDate": "July, 2025",
      "experiences": ["Developed and maintained scalable REST APIs, optimized database operations, and integrated third-party services to enhance system performance."],
      "imageSrc": electromob
    },
    
    {
      "role": "Backend Intern",
      "organisation": "Cloudcredits Technologies",
      "startDate": "Jan, 2024",
      "endDate": "Feb, 2024",
      "experiences": [
        "Worked on component library",
        "Helped create UI components"
      ],
      "imageSrc": cloud
    }
  ];

export const Experience = () => {
    return (
        <section className= {styles.container} id="experience">
            <h2 className= {styles.title}>Experience</h2>
            <div className= {styles.content}>
                <div className= {styles.skills}>
                    {skills.map((skill, id) => (
                        <div className= {styles.skill} key={id}>
                            <div className= {styles.skillImageContainer}>
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
                <ul className= {styles.history}>
                    {
                        history.map((historyItem,id)=>{
                            return <li className= {styles.historyItem} key={id}>
                               <img src={historyItem.imageSrc} alt={`${historyItem.organisation} Logo`} />
                               <div className= {styles.historyItemDetails}>
                               <h3>{`${historyItem.role} `}</h3>
                               <h3>{`${historyItem.organisation} `}</h3>
                               <p>{historyItem.startDate} - {historyItem.endDate}</p>
                            <ul>
                                {historyItem.experiences.map((exp, expId) => (
                                    <li key={expId}>{exp}</li>
                                ))}
                            </ul>
                               </div>
                            </li>
                        }

                        )
                    }
                </ul>
            </div>
        </section>
    );
};
