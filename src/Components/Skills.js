import React from "react";
import Fade from "./Fade";

const skillCats = 
[
    { 
        'catName' : 'Front',
        'skills' : [{
            'name': 'React',
            'img': '/images/skills/React.png'
        },
        {
            'name': 'Empty 2',
            'img': 'https://i.stack.imgur.com/6M513.png'
        }]
    },
    { 
        'catName' : 'Back',
        'skills' : [{
            'name': 'Empty',
            'img': 'https://i.stack.imgur.com/6M513.png'
        },
        {
            'name': 'Empty',
            'img': 'https://i.stack.imgur.com/6M513.png'
        },
        {
            'name': 'Empty',
            'img': 'https://i.stack.imgur.com/6M513.png'
        },
        {
            'name': 'Empty',
            'img': 'https://i.stack.imgur.com/6M513.png'
        },
        {
            'name': 'Empty',
            'img': 'https://i.stack.imgur.com/6M513.png'
        }]
    },
];

console.log(skillCats)
function Skills(props) {
    return (
        <div id={props.path} className="section mx-auto flex flex-wrap dark:text-secondary pt-10 pb-5">   
            <div className="w-full relative flex flex-col mb-5 ">
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between w-1/3">
                        <div className="w-10/12 border-t border-secondary"></div>
                        <div className="w-8/12 border-t border-secondary"></div>
                        <div className="w-6/12 border-t border-secondary"></div>
                    </div>
                    <h2 className="text-3xl">
                        Compétences
                    </h2>
                    <div className="flex flex-col items-end justify-between w-1/3">
                        <div className="w-6/12 border-t border-secondary"></div>
                        <div className="w-8/12 border-t border-secondary"></div>
                        <div className="w-10/12 border-t border-secondary"></div>
                    </div>    
                </div>
            </div>
            <div className="w-full px-5">
                {skillCats.map((skillCat, catKey) => (
                    <div style={{maxWidth : "700px"}} className="w-full mx-auto flex flex-col items-center mb-10" key={catKey}>
                        <div className="text-2xl mb-5">{skillCat.catName}</div>
                        <div className="w-full flex justify-center flex-wrap">
                            {skillCat.skills.map((skills,skillKey) => (  
                                <Fade key={skillKey} fadeClass={skillKey % 2 === 0 ? "fade-left" : "fade-right"}>
                                    <div className={"border border-secondary rounded-md flex flex-col mx-5 mb-5"} style={{width:"300px"}}>
                                        <div style={{height: "200px"}} className="flex justify-center mb-3">
                                            <img style={{maxWidth: "200px"}} className="rounded-t-md object-contain" src={skills.img} alt={skills.name} />
                                        </div>
                                        <div className="my-3">{skills.name}</div>
                                    </div>
                                </Fade>
                            ))}
                        </div>        
                    </div>
                    )
                )}

            </div>
        </div>
    );
}

export default Skills;