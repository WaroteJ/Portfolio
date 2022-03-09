import React from "react";
const skills = 
[
    { 
        'name': 'Empty',
        'img': 'https://i.stack.imgur.com/6M513.png'
    }
]

function Skills(props) {
    return (
        <div className="xl:container mx-auto flex flex-wrap dark:text-secondary pt-10 pb-5">   
            {skills.map((skills,key) => (
                <div key={key} className={"border border-secondary rounded-md flex flex-col"} style={{width:"300px"}}>
                    <img className="rounded-t-md" src={skills.img} alt={skills.name} />
                    <div className="my-3">{skills.name}</div>
                </div>
            ))}
        </div>
    );
}

export default Skills;