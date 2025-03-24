"use client";

import { Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { projects } from '../data/projects';


export default function Projects() {

	const [isMobile, setIsMobile] = useState(false);
	

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 500); // Ativa o carrossel para telas menores ou iguais a 768px
	};


	useEffect(() => {
		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	},[]);

	return (
		<div className="sm:mb-[15rem] mb-[7rem]" id="projetos">
			<h2 className="font-poppins font-bold md:text-[48px] text-[32px] text-[#42446E] mb-2 text-center">Projetos</h2>
			<p className="font-poppins md:text-[32px] text-[18px] md:w-[auto] w-[250px] m-auto text-[#666] text-center mb-6 sd:mb-12">Lista dos meus projetos até o momento</p>

			{isMobile && (
				<Swiper 
					slidesPerView={1}
					spaceBetween={50}
					className="grid w-[350px] sm:grid-cols-2 sm:w-[790px] m-auto sm:gap-[5%] gap-[2%] justify-center h-[645px!important] hsm:h-auto ">
					{projects.map(project => 
						(
							<SwiperSlide className="w-[340px] h-[618px!important] sm:h-auto shadow-xl rounded-br-[20px] rounded-bl-[20px]" key={project.title}>
								<div>
									<img className="rounded-tr-[20px] rounded-tl-[20px] h-[260px] object-cover" src={project.imgPreviewSrc} alt="" />
								</div>
								<div className="p-8 ">
									<h3 className="font-poppins font-[500] text-[26px]">{project.title}</h3>
									<p className="font-poppins text-[#666] leading-[26px] font-[400] mb-2 h-[130px]">{project.description}</p>
									<p className="font-poppins text-[#666] text-[14px] mb-4"><span className="text-[#42446E] font-[500] text-[16px]">Tech stack:</span><br/> {project.techStackText}</p>
									<div className="flex align-middle justify-center gap-[4%]">
										<div>
											<img className="inline mr-1" src="/previews/anchor.svg" alt="" />
											<a className="text-[12px] font-poppins underline hover:opacity-[0.5] transition-all duration-200 ease-in-out" href={project.previewLink}>Preview Projeto</a>
										</div>
										<div>
											<img className="inline mr-1" src="/previews/github.svg" alt="" />
											<a className="text-[12px] font-poppins underline hover:opacity-[0.5] transition-all duration-200 ease-in-out" href={project.repositorioLink}>Repositório</a>
										</div>
									</div>
								</div>
							</SwiperSlide>
						)
					)}
				</Swiper>
			)}
			{!isMobile && (
				<div className="grid w-[375px] sm:grid-cols-2 sm:w-[790px] m-auto sm:gap-[5%] gap-[2%] justify-center ">
					{projects.map(project => 
							(
								<div className="w-[340px] shadow-xl rounded-br-[20px] rounded-bl-[20px]" key={project.title}>
									<div>
										<img className="rounded-tr-[20px] rounded-tl-[20px] h-[260px] object-cover" src={project.imgPreviewSrc} alt="" />
									</div>
									<div className="p-8 ">
										<h3 className="font-poppins font-[500] text-[26px]">{project.title}</h3>
										<p className="font-poppins text-[#666] leading-[26px] font-[400] mb-2 h-[130px]">{project.description}</p>
										<p className="font-poppins text-[#666] text-[14px] mb-4"><span className="text-[#42446E] font-[500] text-[16px]">Tech stack:</span><br/> {project.techStackText}</p>
										<div className="flex align-middle justify-center gap-[4%]">
											<div>
												<img className="inline mr-1" src="/previews/anchor.svg" alt="" />
												<a className="text-[12px] font-poppins underline hover:opacity-[0.5] transition-all duration-200 ease-in-out" href={project.previewLink}>Preview Projeto</a>
											</div>
											<div>
												<img className="inline mr-1" src="/previews/github.svg" alt="" />
												<a className="text-[12px] font-poppins underline hover:opacity-[0.5] transition-all duration-200 ease-in-out" href={project.repositorioLink}>Repositório</a>
											</div>
										</div>
									</div>
								</div>
							)
					)}
				</div>
			)}
		</div>
	)
}