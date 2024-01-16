import Image from "next/image";

function ProcessSection() {
	return (
		<section
			className="w-full flex justify-center items-center py-12"
			id="our-process"
		>
			<div className="container flex flex-col gap-12 text-white px-4">
				<h2 className="text-3xl md:text-5xl font-bold">
					<span className="grad">AI/ML and Predictive Analytics</span> Step by
					Step:
				</h2>
				<div className="text-xl bg-Gray p-8 sm:p-14 rounded-2xl">
					<div className="flex items-center flex-wrap gap-x-8 justify-center md:justify-start pb-4">
						<Image width={54} height={54} alt="xd" src={"/images/circle.png"} />
						<Image width={54} height={54} alt="xd" src={"/images/circle.png"} />
						<Image width={54} height={54} alt="xd" src={"/images/circle.png"} />
						<Image width={54} height={54} alt="xd" src={"/images/circle.png"} />
						<Image width={54} height={54} alt="xd" src={"/images/circle.png"} />
						<Image width={54} height={54} alt="xd" src={"/images/circle.png"} />
					</div>
					<div className="w-full bg-black h-[1px]"></div>
					<div className="pt-10 flex flex-col gap-2">
						<div className="font-bold text-2xl">
							Predictive Analytics in Business:
						</div>
						Using historical data to predict future trends and customer
						behavior.
					</div>
				</div>
			</div>
		</section>
	);
}
export default ProcessSection;
