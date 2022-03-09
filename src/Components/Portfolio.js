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
        img:"/I.jpg", 
        href: `#`, 
        html: `
        <div>
            Bientôt de nouveaux projets
        </div>
        `
    },
    { 
        name: 'A venir...', 
        img:"/I.jpg", 
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
        <div className="mx-auto flex sm:flex-row flex-col dark:text-secondary">   
            <div className="w-full sm:w-1/3 pt-10 pb-5">
                <div className="w-full sm:w-1/3 relative sm:fixed flex flex-col mb-5 sm:mb-0">
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-between w-1/3">
                            <div className="w-10/12 border-t border-secondary"></div>
                            <div className="w-8/12 border-t border-secondary"></div>
                            <div className="w-6/12 border-t border-secondary"></div>
                        </div>
                        <h2 className="text-3xl">
                            Portfolio
                        </h2>
                        <div className="flex flex-col items-end justify-between w-1/3">
                            <div className="w-6/12 border-t border-secondary"></div>
                            <div className="w-8/12 border-t border-secondary"></div>
                            <div className="w-10/12 border-t border-secondary"></div>
                        </div>    
                    </div>
                    <div className="ml-10 mt-10">
                        <h2 className="text-2xl mb-10">
                        Liste des différentes projets réalisés
                        </h2>
                        <ul className="list-disc ml-10">
                            {projects.map((project,key) => (
                                <li key={key}>
                                    <a href={`#${project.name}-${key}`} 
                                    onClick={(e)=> {
                                        e.preventDefault();
                                        const el = document.getElementById(`${project.name}-${key}`);
                                        const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
                                        window.scrollTo({top: y, behavior: 'smooth'});
                                    }
                                    }>
                                        {project.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        
                    </div>
              </div>
            </div>
            <div className="w-full sm:w-2/3">
                {projects.map((project,key) => (
                    <div id={`${project.name}-${key}`} style={{height: "300px", backgroundColor:"#1c0012"}} className="flex relative w-full" key={key} >
                        <div className={`flex flex-col align-middle w-full h-full ${key % 2 === 0 ? "order-1" : "order-2"}`}>
                            <img style={{height: "300px"}}  className="object-cover" src={project.img} alt="" />
                        </div>
                        <div className={`h-auto flex flex-col align-middle w-full ${key % 2 === 0 ? "order-2" : "order-1"}`}>
                            <h2 className="text-2xl my-3 px-3">{project.name}</h2>
                            <div className="text-left px-3 pb-3 flex-grow" dangerouslySetInnerHTML={{__html: project.html}}></div>
                            <div className="flex justify-between mb-5 mx-10">
                                <a href={project.href}
                                className={`dark:hover:text-cta  bg-primary-300 dark:hover:bg-primary p-3 rounded-lg transition border border-primary-300 dark:hover:border-secondary ${key % 2 === 0 ? "order-2" : "order-1"}`}>
                                Lien vers le projet
                                </a>
                                <div className={`border dark:border-secondary rounded-full h-10 w-10 relative ${key % 2 === 0 ? "order-1" : "order-2"}`}>
                                    <div className="absolute center-absolute text-lg dark:text-secondary">
                                        {key+1}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;

