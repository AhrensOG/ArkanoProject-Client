import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'


const SideBar = ({ nav, setNav }) => {

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        nav
          ? "lg:hidden z-10 fixed left-0 top-0 w-full h-screen bg-black/70"
          : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[50%] h-screen bg-slate-50 p-10 ease-in duration-500"
            : "z-10 fixed left-[-200%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link href="/" onClick={() => setNav(false)}>
              <img src="/sun.svg" width="80" height="60" alt="/" />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
            >
              {/* EXIT LOGO */}
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] pt-4 pb-1 uppercase">Arkano Indumentaria</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="cursor-pointer">Inicio</p>
          <p className="cursor-pointer">Galeria</p>
        </div>
        <div className="py-4 flex flex-col">
          <div className="pt-[15rem]">
            <p className="uppercase tracking-widest text-black/90">
              Contactanos
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaFacebookF color="blue" />
                </div>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaInstagram color="purple" />
                </div>
              </a>
              <Link href="#">
                <div
                  onClick={() => setNav(!nav)}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaTwitter color="#22d3ee" />
                </div>
              </Link>
              <a href="#">
                <div
                  onClick={() => setNav(!nav)}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaYoutube color="red" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
