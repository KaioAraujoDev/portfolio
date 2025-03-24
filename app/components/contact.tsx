"use client";

const Contact = () => {
	return (
		<div className="border-b-[2px] border-[#666] border-opacity-[0.30] mb-6 sm:w-[1200px] w-[90%] mx-auto">
			<ul className="flex sm:flex-row flex-col justify-end sm:gap-8 gap-3 sm:mb-10 mb-6">
				<li>+55 (27) 98819-6039</li>
				<li>kaioaraujo6190@gmail.com</li>

				<div className="flex gap-4 pr-2">
					<a href="https://github.com/KaioAraujoDev" className="hover:opacity-50 transition-opacity font-poppins text-[18px] color-[#42446E] ">
						<img src="/icons/github.svg" alt="" />
					</a>

					<a href="https://www.linkedin.com/in/kaioaraujodev/" className="hover:opacity-50 transition-opacity font-poppins text-[18px] color-[#42446E]">
						<img src="/icons/linkedin.svg" alt="" />
					</a>

				</div>
			</ul>
		</div>
	)
}

export default Contact;
