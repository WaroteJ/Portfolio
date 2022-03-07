import React from "react";

const projects = [
    { 
        name: 'Almafus', 
        href: 'https://almafus.netlify.app/accueil',
        img:"/I.jpg", 
        html: `
        <div>
            Projet personnel lié à un jeu de mon enfance, Dofus.
            </br> Les compétences liés à ce projet
            <ul class="list-disc ml-10">
                <li>Web scraping (Python)</li>
                <li>Front-end (React - Bootstrap)</li>
                <li>Back-end (API Platform - Symfony)</li>
            </ul>
        </div>
        `
    },
    { 
        name: 'Portfolio', 
        href: `#`, 
        img:"/I.jpg", 
        html: `
        <div>
            Projet personnel afin de présenter mes réalisations.
            </br> Les compétences liés à ce projet
            <ul class="list-disc ml-10">
                <li>Front-end (React - Tailwind)</li>
            </ul>
        </div>
        `
    },
    { 
        name: 'A venir...', 
        img:"", 
        href: `#`, 
        html: `
        <div>
            Bientôt de nouveaux projets
        </div>
        `
    },
  ]

  console.log(projects)
function Portfolio(props) {
    return (
        <div className="xl:container mx-auto flex dark:text-secondary">   
            {projects.map((project,key) => (
                <a className="relative mx-3 sm:w-full lg:w-1/2 xl:w-1/3" key={key} href={project.href}>
                    <div className="flex flex-col align-middle w-full h-full  rounded-md border dark:border-secondary dark:bg-primary">
                        <img style={{maxHeight: "300px"}} className="aspect-video object-cover rounded-t-md" src={project.img} alt="" />
                        <h2 className="text-2xl my-3 px-3">{project.name}</h2>
                        <div className="text-left px-3 pb-3" dangerouslySetInnerHTML={{__html: project.html}}></div>
                    </div>
                </a>

            ))}
        </div>
    );
}

export default Portfolio;

