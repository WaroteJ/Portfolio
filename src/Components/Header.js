import React from "react";
import { Disclosure, } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
// import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';

const navigation = [
  // { name: 'Accueil', to: 'home'},
  { name: 'A propos', to: 'about'},
  { name: 'Portfolio', to: 'portfolio'},
  { name: 'Compétences', to: 'skills'},
  { name: 'Contact', to: 'contact'},
]

const navItemClasses = 'text-lg transition border dark:border-primary dark:hover:bg-primary-500 dark:hover:border-secondary px-3 py-2 rounded-md font-medium';

function Header(props) {
  const [sections, setSections] = useState([]);
  const [activeMenu, setActiveMenu] = useState();
  
  const refSections = useRef();
  const refActiveMenu = useRef();

  refSections.current = sections;
  refActiveMenu.current = activeMenu;

  const handleScroll = () => {
    
    refSections.current.forEach((el)=> {
      let menu = document.querySelector(`[href="#${el.id}"]`)
      if (menu !== refActiveMenu.current && window.scrollY >= (el.offsetTop - 64) && window.scrollY < el.offsetTop + el.offsetHeight){
        setActiveMenu(menu);
        menu.parentElement.querySelectorAll(".active").forEach(ele => {
          ele.classList.remove("dark:text-cta", "active")
        });
        menu.classList.add("dark:text-cta")
        menu.classList.add("active")
      }
    }) 
  }
  
  useEffect(() => {
    setSections(document.querySelectorAll('.section'))
    
    // clean up code
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <Disclosure as="nav" className="bg-neutral-800 dark:bg-primary dark:text-secondary fixed w-full z-50 pr-5">
    {({ open }) => (
      <>
        <div className="xl:container mx-auto">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
              <div className="flex-shrink-0 flex items-center">
                {/* TODO add website image */}
            
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item,key) => (
                    
                    <a
                      key={key}
                      href={"#"+item.to }
                      onClick={(e)=> {
                        e.preventDefault();
                        e.target.parentElement.querySelectorAll(".active").forEach(el => {
                          el.classList.remove("dark:text-cta", "active")
                        });
                        e.target.classList.add("dark:text-cta")
                        e.target.classList.add("active")
                        const el = document.getElementById(`${item.to}`);
                        const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
                        window.scrollTo({top: y, behavior: 'smooth'});
                      }}
                      // className={
                      //   ({ isActive }) => 
                      //     isActive ? 'dark:text-cta ' + navItemClasses : 'hover:text-cta ' + navItemClasses
                      // }
                      className={'menu-item hover:text-cta ' + navItemClasses}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            {navigation.map((item,key) => (
              <Disclosure.Button key={key}>
                  <a
                    href={"#"+item.to }
                    onClick={(e)=> {
                      e.preventDefault();
                      
                      const el = document.getElementById(`${item.to}`);
                      const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
                      window.scrollTo({top: y, behavior: 'smooth'});
                    }}
                    // className={
                      //   ({ isActive }) => 
                      //     isActive ? 'dark:text-cta ' + navItemClasses : 'hover:text-cta ' + navItemClasses
                      // }
                      className={'hover:text-cta ' + navItemClasses}
                  >
                  
                    {item.name}
                  </a>
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  );
}

export default Header;
