import React from "react";
const skillCats = 
[
    { 
        'catName' : 'Front',
        'skills' : [{
            'name': 'Empty',
            'img': 'https://i.stack.imgur.com/6M513.png'
        },
        {
            'name': 'Empty 2',
            'img': 'https://i.stack.imgur.com/6M513.png'
        }
        ]
    },
    { 
        'catName' : 'Back',
        'skills' : [{
            'name': 'Empty',
            'img': 'https://i.stack.imgur.com/6M513.png'
        }]
    },
];

console.log(skillCats)
function Skills(props) {
    return (
        <div className="mx-auto flex flex-wrap dark:text-secondary pt-10 pb-5">   
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
            <div className="px-5">
                {skillCats.map((skillCat, catKey) => (
                        <>
                            <div key={catKey}>{skillCat.catName}</div>
                            {skillCat.skills.map((skills,skillKey) => (    
                                <div key={skillKey} className={"border border-secondary rounded-md flex flex-col"} style={{width:"300px"}}>
                                    <img className="rounded-t-md" src={skills.img} alt={skills.name} />
                                    <div className="my-3">{skills.name}</div>
                                </div>
                            ))}
                        </>
                    )
                )}

            </div>
        </div>
    );
}

export default Skills;