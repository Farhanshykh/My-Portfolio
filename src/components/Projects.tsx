import React from 'react'
import Heading from './Heading'
import Card from './Card'
import { title } from 'process'

const data = [
    {
        id: 0,
        title: "Static Interactive Resume",
        desc: "A TypeScript-based interactive resume built HTML and CSS, allowing users to showcase their skills dynamically",
        img: "/Project_01.png",
        tags: ["HTML", "CSS", "TypeScript"]
    },
    {
        id: 1,
        title: "Digital Clock",
        desc: "A real-time digital clock built with Next.js, React, and TypeScript. Displays the current time and date, updating every second.",
        img: "/Project_02.png",
        tags: ["Next.js", "React", "TypeScript", "CSS"]
    },
    {
        id: 2,
        title: "Simple Calculator Project",
        desc: "A basic HTML CSS and TypeScript calculator for performing essential arithmetic operations.",
        img: "/Project_03.png",
        tags: ["Next.js", "React", "TypeScript", "CSS"]
    },
    {
        id: 3,
        title: "Birthday Wish Project",
        desc: "A fun and interactive Birthday Wish app built with React and TypeScript. Allows users to send personalized birthday messages and display celebratory animations.",
        img: "/Project_04.png",
        tags: ["Next.js", "React", "TypeScript"]
    },
    {
        id: 4,
        title: "Number Guessing Game",
        desc: "An engaging Number Guessing Game built with Next.js, React and TypeScript. Users guess a randomly generated number within a given range, with feedback on whether their guess is too high or low.",
        img: "/Project_05.png",
        tags: ["Next.js", "React", "TypeScript", "CSS"]
    },
    {
        id: 5,
        title: "Countdown Timer",
        desc: "A Next.js and TypeScript Powered website to track time with an interactive countdown feature.",
        img: "/Project_06.png",
        tags: ["Next.js", "Node", "TypeScript", "CSS"]
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((elem) => (<Card
        key={elem.id}
        title= {elem.title}
        desc= {elem.desc}
        img= {elem.img}
        tags= {elem.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
