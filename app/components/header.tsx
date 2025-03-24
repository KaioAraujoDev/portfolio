"use client";

import Image from 'next/image';

export default function Header() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <div className='md:flex md:justify-center md:items-center mx-auto w-[100%] md:mb-20 mb-16'>
        <nav>
          <ul className='flex justify-center gap-[45px] md:gap-x-12 pt-[35px] pb-[20px] md:py-12 md:mr-12 mb-1'>
            <li>
              <button onClick={()=>{ scrollToSection('tech')}} className='hover:opacity-50 transition-opacity'>
                Tech Stack
              </button>
            </li>
            <li>
              <button onClick={()=>{ scrollToSection('projetos')}} className='hover:opacity-50 transition-opacity'>
                Projetos
              </button>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className='flex items-center justify-center gap-5'>
            <li>
              <a href="https://github.com/KaioAraujoDev" className='hover:opacity-50 transition-opacity'>
                <Image
                  src="/icons/github.svg"
                  width={30}
                  height={30}
                  alt="Icone GitHub"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kaioaraujodev/" className='hover:opacity-50 transition-opacity'>
                <Image
                  src="/icons/linkedin.svg"
                  width={30}
                  height={30}
                  alt="Icone Linkedin"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </>
  )
}