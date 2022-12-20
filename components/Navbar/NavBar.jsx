import React, { useState } from "react";
import { Navbar } from "flowbite-react";

const NavBar = ({nav, setNav, state}) => {

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div>
      <Navbar fluid={true} rounded={false} className="bg-black/90">
        <div onClick={handleNav}>
          {/* MENU */}
          <svg className="w-8 h-8 cursor-pointer" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" ></path></svg>
        </div>
        {
        state === "welcome"?
        <div>
          <p className="font-roboto text-white font-semibold text-xl">
            BIENVENIDO
          </p>
        </div>
        : 
        state === "select"?
        <div>
          <p className="font-roboto text-white font-semibold text-xl">
            SELECCIONA UN TIPO DE PRENDA
          </p>
        </div>
        :
          state === "cut" ? 
        <div>
          <p className="font-roboto text-white font-semibold text-xl">
            SELECCIONA UN TIPO DE CORTE
          </p>
        </div>
        :
          state === "creation" ? 
        <div>
          <p className="font-roboto text-white font-semibold text-xl">
            CREADOR DE DISEÑO 
          </p>
        </div>
        :  
        <div>
          <p className="font-roboto text-white font-semibold text-xl">
            ¡MUCHAS GRACIAS!
          </p>
        </div>
        }
        <div>
          <svg className="w-8 h-8 cursor-pointer" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
