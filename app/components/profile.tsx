export default function Profile() {
	return (
		<>
			<div className="flex flex-col md:flex-row items-center gap-14 md:gap-20 justify-center md:mb-36 mb-20">
				<div>
					<h1 className="font-poppins font-[700] text-[30px] md:text-[56px] md:w-[636px] text-[#42446E] md:leading-[70px] tracking-[-1px]">
						Olá 👋,<br />
						Meu nome é<br />
						Kaio e<br />
						Sou Desenvolvedor<br/>
					</h1>
				</div>
				<div>
					<img className="w-[150px] md:w-[325px] rounded-[100%] border-[4px] md:border-[6px] border-[#42446E]" src="/photo/profile-1.jpg" alt="" />
				</div>
			</div>
		</>
	)
}							