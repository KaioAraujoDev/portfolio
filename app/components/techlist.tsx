export default function TechList (){

    return(
        <div id="tech">  
            <div className="font-poppins text-center md:mb-12 mb-6" id="section-tech-stack">
                <h2 className="font-bold md:text-[48px] text-[32px] text-[#42446E] mb-2">Tecnologias</h2>
                <p className="md:text-[32px] text-[18px] md:w-[auto] w-[250px] m-auto text-[#666]">Atualmente tenho experiência com as demais tecnologias</p>
            </div>
            <div id="list-stack" className="md:mb-36 mb-20">
                <ul className="flex justify-center  flex-row flex-wrap md:gap-14 gap-5 items-center m-auto w-[250px] md:w-auto">
                    <li>
                        <img className="w-[85px] md:w-auto" src="/icons/tech-stack/html.svg" alt="" />
                    </li>
                    <li>
                        <img className="w-[85px] md:w-auto" src="/icons/tech-stack/css.svg" alt="" />
                    </li>
                    <li>
                        <img className="w-[85px] md:w-auto" src="/icons/tech-stack/js.svg" alt="" />
                    </li>
                    <li>
                        <img className="w-[85px] md:w-auto" src="/icons/tech-stack/react.svg" alt="" />
                    </li>
                    <li>
                        <img className="w-[85px] md:w-auto" src="/icons/tech-stack/sass.svg" alt="" />
                    </li>
                    <li>
                        <img className="w-[85px] md:w-auto" src="/icons/tech-stack/tailwind.svg" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
