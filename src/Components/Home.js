import React from "react";
// import { NavLink } from "react-router-dom";

function Home(props) {

    return (
        <>
            <div id={props.path} className="section xl:container mx-auto sm:grid grid-cols-2 dark:text-secondary pt-10 pb-24 px-5">   
                <img className="border border-secondary rounded-md aspect-square object-cover mx-auto mb-5 sm:mb-0 w-10/12" 
                src={"/I.jpg"} alt="I" />
                <div className="px-2 flex flex-col align-baseline text-left">
                    <h3 className="mb-3 text-3xl">
                        Je suis 
                        {/* <NavLink to={"/about"} className="dark:text-cta"> Jérôme</NavLink> */}
                        <span className="dark:text-cta"> Jérôme</span> 
                        <br />
                        Développeur Fullstack
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Natus error reprehenderit nisi impedit maxime minima, dignissimos sunt deserunt quam, 
                        veritatis sapiente, ab rem non est officiis laudantium voluptatum hic placeat?
                    </p>
                    {/* <div className="flex justify-end">
                        <NavLink to={"/about"} 
                        className="bg-cta p-3 rounded-lg transition border border-cta dark:hover:border-secondary ">
                            En savoir plus...
                        </NavLink>
                    </div> */}

                </div>
            </div>
        </>
    );
}

export default Home;

